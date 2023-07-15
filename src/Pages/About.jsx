import { Stack, Typography } from "@mui/material";
import "../Styles/About.css";
import NavBar from "../Components/Navbar";

export default function About() {

    return (
        <>
            <NavBar active={""} />
            <h2 className="title">ABOUT</h2>
            <Stack className="stack"
                p={{ xs: "15px", sm: "25px", md: "40px", lg: "60px " }}>

                <Stack
                    className="midContainer"
                    direction={{
                        xs: "column-reverse",
                        sm: "column-reverse",
                        md: "column-reverse",
                        lg: "row",
                    }}
                    spacing={{ xs: 1, sm: 2, md: 4 }}
                    mt="20px">
                    <Typography
                        sx={{
                            fontSize: {
                                xs: "13px",
                                sm: "15px",
                                md: "17px",
                                lg: "19px",
                            },
                            paddingRight: {
                                xs: "15px",
                                sm: "18px",
                                lg: "25px",
                            },
                            paddingLeft: {
                                xs: "15px",
                                sm: "18px",
                                lg: "25px",
                            },

                            textAlign: "justify"
                        }}>
                        A resume builder app is a software application that allows users to easily create, edit, and share professional resumes. These apps typically include a wide range of customizable templates, pre-written phrases and prompts, and tools for formatting, editing, and sharing resumes. <br />
                        Some resume builder apps also include features such as the ability to import existing resumes, the ability to save resumes in multiple formats, and the ability to share resumes directly with potential employers. <br />
                        Overall, a resume builder app can help users save time and effort when creating a resume, and can also help them create a more polished and professional-looking document.

                    </Typography>
                    <Stack>
                        <img
                            src="https://news.utexas.edu/wp-content/uploads/2021/01/TCE_BlogPostImage_ResumeBuilding-100-600x400-c-default.jpg"
                            alt="About_Image"
                        />
                    </Stack>
                </Stack>
                </Stack>
        </>
    );
}
