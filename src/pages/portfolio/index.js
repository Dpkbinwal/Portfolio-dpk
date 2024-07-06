import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { dataportfolio, meta } from "../../content_option";

export const Portfolio = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Portfolio | {meta.title} </title>{" "}
          <meta name="description" content={meta.description} />
        </Helmet>

        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4"> Portfolio </h1>{" "}
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>


        {/* <div className="mb-20 po_items_ho">
        {dataportfolio.map((project, i) => {
          return (
            <span  className="po_item w-200" key={i}>
              <img src={project.img} alt={project.title} />
              {project.description}
              <div className="flex absolute left-0 right-0 top-[13px] bottom-0 mx-auto w-[90%] h-[90%]  bg-primary  opacity-0 duration-500 justify-center flex-col hover:opacity-100 ">
                <p className="py-5 text-center font-bold px-2 text-white">
                  {project.description}
                </p>

                <div className="mx-auto">
                  <a
                    href={project.link}
                    className="px-5 py-2 bg-blue-500 hover:bg-blue-600 mr-5 font-bold"
                  >
                    Live
                  </a>
                  <a
                    href={project.code}
                    className="px-5 py-2 bg-blue-700 hover:bg-blue-800 font-bold"
                  >
                    Code
                  </a>
                </div>
              </div>
            </span>
          );
        })}
      </div> */}

        <div className="mb-20 po_items_ho">
          
          {dataportfolio.map((data, i) => {
            return (

              <div key={i} className="po_item">

                <img src={data.img} alt="IMAGE" />
                <div className="content">
                  <p>{data.description}</p>
                  <a href={data.link} target="_blank">view project</a>
                </div>

              </div>

            );
          })}

        </div>


      </Container>
    </HelmetProvider>
  );
};
