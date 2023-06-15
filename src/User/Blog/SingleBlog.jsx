import axios from 'axios';
import React from 'react'
import { useParams } from 'react-router-dom'
import Typography from "@mui/material/Typography";
import { baseUrl } from '../../Global/config';
import { Box, CircularProgress } from "@mui/material";
import Divider from '@mui/material/Divider';

const SingleBlog = () => {
    const id = useParams();
    const [blog, setBlogs] = React.useState([]);

    const getSingleBlogs = async (id) => {
        let res = await axios.get(`${baseUrl}blog/${id.id}`);
        setBlogs(res.data);
    };


    React.useEffect(() => {
        getSingleBlogs(id);
    }, []);



    return (
        <div>
            <Box sx={{ p: 3 }}>
                <Typography
                    sx={{ fontSize: "20px", fontWeight: "800", textAlign: "center" }}
                >
                    {blog.title}
                </Typography>
                <img
                    src={blog.image}
                    style={{ height: '500px', width: "100%", objectFit: 'contain' }}
                />
                <Typography sx={{ pb: 2, pt: 2 }}>{blog.author}</Typography>
                <Divider />
                <Typography sx={{ pt: 3 }}>{blog.description}</Typography>
            </Box>
        </div>
    )
}

export default SingleBlog