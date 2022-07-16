import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { EditorState, convertToRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import draftToHtml from "draftjs-to-html";

import MultiImageInput from "react-multiple-image-input";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import ClipLoader from "react-spinners/ClipLoader";
import { useAlert } from "react-alert";


import axios from "axios";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { useIsAuth } from "../utils/useIsAuth";
import { useCreatePostMutation } from "../generated/graphql";
import { Console, log } from "console";
export default function AddProduct() {
  useIsAuth();
  const alert = useAlert();

  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [content, setContent] = useState("");
  const [productImage, setproductImage] = useState<string[]>([]);
  const uploadImageCallBack = async (file: any) => {
    // setLoad(true);
    const formdata = new FormData();
    formdata.append("file", file);
    formdata.append("upload_preset", "stishio");
    const res = await axios.post(
      "https://api.cloudinary.com/v1_1/mahmudakash177/upload",
      formdata
    );

    console.log(res.data.secure_url);
    return { data: { link: res.data.secure_url } };
  };
  const crop = {
    unit: "%",
    aspect: 4 / 3,
    width: "100",
  };
  const [createPost] = useCreatePostMutation();
  const [title, settitle] = useState<string>("");
  const [images, setImages] = useState({});
  const [imgLoading, setimgLoading] = useState(false);
  const uploadAllImages = async () => {
    setimgLoading(true);

    const files = Object.values(images);

    const uploaders = files.map(async (file: any) => {
      // Initial FormData
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", "stishio"); // Replace API key with your own Cloudinary key
      formData.append("timestamp", JSON.stringify((Date.now() / 1000) | 0));

      // Make an AJAX upload request using Axios (replace Cloudinary URL below with your own)
      const response = await axios.post(
        "https://api.cloudinary.com/v1_1/mahmudakash177/upload",
        formData,
        {
          headers: { "X-Requested-With": "XMLHttpRequest" },
        }
      );
      const data = response.data;
      // const fileURL = data.secure_url; // You should store this URL for future references in your app
      setproductImage([...productImage, data.secure_url]);
      console.log(productImage);
    });

    // Once all the files are uploaded
    await axios.all(uploaders);

    setimgLoading(false);
    console.log(productImage);
    console.log(typeof productImage);
    alert.success("All images are uploaded");
  };

  // async (values) => {
  //   const { errors } = await createPost({
  //     variables: { input: values },
  //     update: (cache) => {
  //       cache.evict({ fieldName: "posts:{}" });
  //     },
  //   });
  //   if (!errors) {
  //     router.push("/");
  //   }
  // }
  const [text, setText] = useState("");
  const addProduct = async (e: any) => {
    e.preventDefault();
    const values = {
      title,
      images:productImage,
      description: content,
      text,
    };
    console.log(values)
    const { errors } = await createPost({
      variables: { input: values },
      update: (cache) => {
        cache.evict({ fieldName: "posts:{}" });
      },
    });
    console.log(errors);
    
    if (!errors) {
      // router.push("/");
    }
  };
  return (
    <>
      <Helmet>
        <title>Stshio Admin - Add product</title>
      </Helmet>

      <div className="page-header">
        <h3 className="page-title"></h3>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="/"></a>
            </li>
            <li className="breadcrumb-item active" aria-current="page"></li>
          </ol>
        </nav>
      </div>
      <div className="row">
        <div className="col-md-12 grid-margin stretch-card">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Login</h4>
              <p className="card-description"></p>
              <div className="col-md-12">
                <div>
                  <form
                    onSubmit={addProduct}
                    method="POST"
                    className="forms-sample"
                  >
                    <div className="form-group">
                      <label htmlFor="productTitle">Title</label>
                      <input
                        autoComplete="none"
                        onChange={(e) => {
                         
                          
                          settitle(e.target.value);
                          console.log(title);
                        }}
                        type="text"
                        className="form-control"
                        id="productTitle"
                      />
                    </div>
                    <div className="form-group">
                      <label>Description</label>
                      <Editor
                        editorState={editorState}
                        onEditorStateChange={(newState) => {
                          setEditorState(newState);
                          setContent(
                            draftToHtml(
                              convertToRaw(newState.getCurrentContent())
                            )
                          );
                        }}
                        toolbar={{
                          inline: { inDropdown: false },
                          list: { inDropdown: false },
                          textAlign: { inDropdown: false },
                          link: { inDropdown: false },
                          history: { inDropdown: false },

                          image: {
                            previewImage: true,
                            uploadCallback: (file: any) =>
                              uploadImageCallBack(file),
                            alt: { present: true, mandatory: true },
                          },
                        }}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="productTitle">Page Title</label>
                      <input
                        autoComplete="none"
                       
                        onChange={(e) => {
                         
                          
                          setText( e.target.value);
                          console.log(title);
                        }}
                        type="text"
                        className="form-control"
                        id="productTitle"
                      />
                    </div>
                    <MultiImageInput
                      images={images}
                      setImages={setImages}
                      allowCrop={false}
                      theme={"light"}
                      max={10}
                      cropConfig={{ crop, ruleOfThirds: true }}
                    />

                    <div
                      style={{
                        cursor: "pointer",
                        pointerEvents: `${
                          imgLoading === true ? "none" : "unset"
                        }`,
                        display: "block",
                        width: "12%",
                        marginBottom: "20px",
                      }}
                      onClick={uploadAllImages}
                      className="btn btn-primary mr-2"
                    >
                      {imgLoading === true ? (
                        <>
                          <ClipLoader color={"#fff"} loading={true} size={20} />
                        </>
                      ) : (
                        <>
                          <i
                            style={{
                              marginRight: "2px",
                            }}
                            className="fas fa-cloud-upload-alt"
                          />
                          Upload
                        </>
                      )}
                    </div>

                    <button type="submit" className="btn btn-primary mr-2">
                      Submit
                    </button>
                    <button type="reset" className="btn btn-light">
                      Cancel
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
