import React, { useState } from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { dataportfolio, meta } from "../../content_option";
import Modal from "../../tic-tac-toe/Modal";
import TicTacToe from "../../tic-tac-toe/TicTacToe";

export const Portfolio = () => {
  
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
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
           <h2 className="text-4xl font-bold">Projects</h2>{" "}
          </Col>
          <Col >
          <div className="play">
        <button id='button_hai' className="open-modal-button " onClick={openModal}>
            Play
          </button>
          <Modal isOpen={isModalOpen} onClose={closeModal}>
            <TicTacToe />
          </Modal>
        </div>
          </Col>
          <hr className=" t_border my-3 ml-0 text-left" />
        </Row>
        
        <div className=" mb-20 po_items_ho">
          
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
