import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import './MenuComp.css';

import data from '../../menu.json';

export const MenuComp = () => {

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);


  // State to manage current page
  const [currentPage, setCurrentPage] = useState(1);
  // Number of items per page
  const itemsPerPage = 6;

  // Calculate the index of the first and last item to display on the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  // Slice the array of items to display only the items for the current page
  const currentItems = data.platos.slice(indexOfFirstItem, indexOfLastItem);

  // Function to handle pagination click
  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <>
      <h2 className="Title-menu">Menú del día</h2>

      <ul className="pagination justify-content-center pt-2 pb-4">
          {Array.from({ length: Math.ceil(data.platos.length / itemsPerPage) }, (_, index) => (
            <li key={index} className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}>
              <button onClick={() => paginate(index + 1)} className="page-link">
                {index + 1}
              </button>
            </li>
          ))}
        </ul>

      <div className="container">
        <Row xs={1} md={2} className="g-2">
          {currentItems.map((platos, idx) => (
            <Col key={idx}>
              <div>
                <Link to={`/Menu/${platos.item}`}>
                  <Card className="bodyCard h-100">
                    <Card.Body className="d-flex flex-column">
                      <Row>
                        <Col md={4} className="carImg">
                          <Card.Img
                            src={platos.imagen}
                            alt={platos.item}
                            className="cardImg"
                          />
                        </Col>
                        <Col md={8}>
                          <Card.Title className="bodyCardTitle">
                            {platos.item}
                          </Card.Title>
                          <Card.Text className="bodyCardParagraph">
                            {platos.description.length > 80
                              ? `${platos.description.slice(0, 140)}...`
                              : platos.description}
                          </Card.Text>
                          <Card.Text className="bodyCardPrice mt-auto">
                            $ {platos.price}.-
                          </Card.Text>
                        </Col>
                      </Row>
                    </Card.Body>
                    <div className="triangle"></div>
                  </Card>
                </Link>
              </div>
            </Col>
          ))}
        </Row>
        {/* Pagination */}
        <ul className="pagination justify-content-center pt-3 pb-3">
          {Array.from({ length: Math.ceil(data.platos.length / itemsPerPage) }, (_, index) => (
            <li key={index} className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}>
              <button onClick={() => paginate(index + 1)} className="page-link">
                {index + 1}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
