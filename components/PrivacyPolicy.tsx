

const policyTerms = [
  [
    {
      content: "GDRP",
        
      //link: "https://twitter.com/rauchg/status/1612233034622984192",
      author: {
        name: "Compliance",
      },
    },
    {
      content:"Basic user personal data like name and email when you create an account and when you log in; Texts, photos, urls, videos, and music uploaded by the user when you make use of, or interact with the Software; Payment information (credit card number last 4 digits, expiration date and name of card provider) when you become a Paying User. ",
       
      //link: "https://twitter.com/cramforce/status/1612496954218672128",
      author: {
        name: "Data Collected",
      },
    },
  ],
  [
    {
      content:" Our service infrastructure is constantly maintained and checked for security. We have a regular process to back up our servers and data. Our employees and systems can only access the data they need to do their job.",
      
      //link: "https://twitter.com/phar_whaz/status/1612498030627852309",
      author: {
        name: "Infrastructure security",
       
      },
    },
    {
      content:
      "We keep designs secure in transit and at rest. All communication is encrypted in transit using TLS/SSL. At rest all data is sored securely on protected data servers from AWS.",
      //link: "https://twitter.com/sergvind/status/1612610058369515521",
      author: {
        name: "Encryption",
       
      },
    },
    {
      content:
      "We use a global CDN to prevent network attacks and keep our services available through the globe.",
      //link: "https://twitter.com/rod_ellison/status/1612513333302775809",
      author: {
        name: "Highly available",
       
      },
    },
  ],
  [
    {
      content:
      "Our employees and systems can only access the data they need to do their job. All data, including backups, is stored in data centers based in the USA, using multiple availability zones, powered by leading hosting providers like Amazon Web Services and Vercel. Any vulnerabilities are regularly scanned.",
      //link: "https://twitter.com/Himanil_Gole/status/1612510385504157697",
      author: {
        name: "Data Protection",
      },
    },
    {
      content:
      "Users can delete or download their data in their profile, Users are able to delete their accounts by a request. When an account is deleted all user’s data is deleted. We comply with laws requiring consent for marketing and tracking and provide the ability to opt-out. Users can keep their accounts still unsubscribe from any marketing emails. We are open about how we use your data in our privacy policy. We practice privacy by design, with new products and projects presenting privacy risk assessed for any impact.",
      //link: "https://twitter.com/rod_ellison/status/1612513333302775809",
      author: {
        name: "Privacy",
       
      },
    },

    



  ],
];

export default function Testimonials() {
  return (
    <section
      id="policyTerms"
      aria-label="AIVIDOO Privacy Policy"
      className="py-10"
    >
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:gap-8 lg:mt-16 lg:max-w-none lg:grid-cols-3"
        >
          {policyTerms.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="flex flex-col gap-y-6 sm:gap-y-8">
                {column.map((testimonial, testimonialIndex) => (
                  <li
                    key={testimonialIndex}
                    className="hover:scale-105 transition duration-300 ease-in-out"
                  >

                    <figure className="privacy-card relative rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10">
                      <blockquote className="relative">
                        <p className="text-lg tracking-tight text-white">
                          {testimonial.content}
                        </p>
                      </blockquote>
                      <figcaption className="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
                        <div>
                          <div className="font-display text-3xl text-white">
                            {testimonial.author.name}
                          </div>
                        </div>

                      </figcaption>
                    </figure>

                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
