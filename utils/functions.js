import { account, db, storage } from "./appwrite";
import { toast } from "react-toastify";
import { ID, Query } from "appwrite";


const generateID = () => Math.random().toString(36).substring(2, 24);



export const successMessage = (message) => {
	toast.success(message, {
		position: "top-right",
		autoClose: 5000,
		hideProgressBar: false,
		closeOnClick: true,
		pauseOnHover: true,
		draggable: true,
		progress: undefined,
		theme: "light",
	});
};

export const errorMessage = (message) => {
	toast.error(message, {
		position: "top-right",
		autoClose: 5000,
		hideProgressBar: false,
		closeOnClick: true,
		pauseOnHover: true,
		draggable: true,
		progress: undefined,
		theme: "light",
	});
};




export const addUser = async (name, email, password) => {
	try {
		//👇🏻 create a new acct on Appwrite Auth
		await account.create(generateID(), email, password, name);
		//👇🏻 adds the user's details to the users database
		await db.createDocument(
			process.env.NEXT_PUBLIC_DB_ID,
			process.env.NEXT_PUBLIC_USERS_COLLECTION_ID,
			ID.unique(),
			{ user_id: generateID(), name, email }
		);
		successMessage("User added successfully 🎉");
	} catch (error) {
		console.log(error);
	}
};


export const addCreation = async (userId, videoDuration) => {
	try {
		//👇🏻 create a new acct on Appwrite Auth
		//await account.create(generateID(), email, password, name);
		//👇🏻 adds the user's details to the users database
		const dateCreated = new Date();
		await db.createDocument(
			process.env.NEXT_PUBLIC_DB_ID,
			process.env.NEXT_PUBLIC_CREATIONS_COLLECTION_ID,
			ID.unique(),
			{ userId, videoDuration, dateCreated}
		);
		successMessage("Creation added successfully 🎉");
	} catch (error) {
		console.log(error);
	}
};


export const findCreation = async (userId, subscriptionStart) => {
	
	try {
		
		var date = new Date(subscriptionStart * 1000); // convert timestamp to date
        
		
		//console.log(startDate);
		//console.log(date);
		const response = await db.listDocuments(
			process.env.NEXT_PUBLIC_DB_ID,
			process.env.NEXT_PUBLIC_CREATIONS_COLLECTION_ID,
		);
		
        const creations = response.documents;
		const results = creations.filter((creation) => ( creation.userId === userId ));
		const lists = results.filter((result) => ( new Date (result.dateCreated) >= date  ) );
		
		date.setDate(date.getDate() + 30); // add 30 days to subscription start date

		//console.log(date);

       const usageLists = lists.filter((list) => ( new Date (list.dateCreated) <= date  ) );
		//console.log(lists);
		
		var userUsage = usageLists.map(usageList => usageList.videoDuration).reduce((usage, duration) => usage + duration);
		
		//console.log(userUsage);
        //console.log(result[0].videoDuration);
		return userUsage;
	} catch (error) {
		console.log(error); // Failure
	}

};





export const checkNewUserTrial = async (userId) => {
	try {
		const response = await db.listDocuments(
			process.env.NEXT_PUBLIC_DB_ID,
			process.env.NEXT_PUBLIC_CREATIONS_COLLECTION_ID
		);
		const creations = response.documents;
		const result = creations.filter((creation) => creation.userId === userId);

		return result;
		
		
	} catch (error) {
		//errorMessage("An error occurred 😪");
		console.error(error);
	}
};


export const addReview = async (userEmail, userName,  productName, planName, productMessage) => {
	try {
		//👇🏻 create a new acct on Appwrite Auth
		//await account.create(generateID(), email, password, name);
		//👇🏻 adds the user's details to the users database
		const dateSubmitted = new Date();
		await db.createDocument(
			process.env.NEXT_PUBLIC_DB_ID,
			process.env.NEXT_PUBLIC_REVIEWS_COLLECTION_ID,
			ID.unique(),
			{ userEmail, userName,  productName, planName, productMessage, dateSubmitted}
		);
		successMessage("Review added successfully 🎉");
	} catch (error) {
		console.log(error);
	}
};





