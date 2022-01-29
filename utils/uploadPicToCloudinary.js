import axios from "axios";
import { Form } from "semantic-ui-react";

const uploadPic = async(media) => {
    try {
        const form = new FormData()
        form.append('file',media)
        form.append('upload_preset','social_media')
        form.append('cload_name','dn9hxyxud')

        const res = await axios.post(process.env.CLOUDINARY_URL,form)
        return res.data.url;
    } catch (error) {
        return
        
    }
}

export default uploadPic;