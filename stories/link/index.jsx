import React from 'react';
import { Row, Col, Link } from 'components';
import { BrowserRouter } from 'react-router-dom';

import LinkDocs from 'components/link/link-DOCS.md';
import LinkReadme from 'components/link/link-README.md';

import { decorator } from '../../utils/decorator';
import { WrappedComponent } from '../helpers/wrapped';

export default decorator('Link', LinkDocs, LinkReadme).add('Link component', () => {
  return (
    <WrappedComponent>
      <BrowserRouter>
        <Row style={{ justifyContent: 'space-around' }}>
          <Col xs="2" sm="4" lg="3">
            <Link to="">Link Component</Link>
          </Col>
          <Col xs="2" sm="4" lg="3">
            <Link disabled to="">
              Link Component
            </Link>
          </Col>
          <Col xs="2" sm="4" lg="3">
            <Link to="">Link Component</Link>
          </Col>
          <Col xs="2" sm="4" lg="3">
            <Link to="">Link Component</Link>
          </Col>
          <Col xs="2" sm="4" lg="3">
            <Link component="a" href="https://google.com" target="_blank">
              External Link
            </Link>
          </Col>
        </Row>
      </BrowserRouter>
    </WrappedComponent>
  );
});
