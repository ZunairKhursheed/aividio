export const validateImgSize = (file) => {
    if (!file) return
    if (file.size > 1000000) {
        return true
    } else {
        return false
    }
}


export const validateAudioSize = (file) => {
    if (!file) return
    if (file.size > 2000000) {
        return true
    } else {
        return false
    }
}

const getExtension = (filename) => {
    var parts = filename.split('.');
    return parts[parts.length - 1];
}

export const isAudio = (filename) => {
    var ext = getExtension(filename);
    switch (ext.toLowerCase()) {
        case 'wav':
        case 'mp3':
            return true;
    }
    return false;
}

export const isImage = (filename) => {
    var ext = getExtension(filename);
    switch (ext.toLowerCase()) {
        case 'jpg':
        case 'jpeg':
            return true;
    }
    return false;
}