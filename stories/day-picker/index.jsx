import { Col, DateInput, DayPicker, Row } from 'components';
import DateInputDocs from 'components/form/date-input/date-input-DOCS.md';
import DateInputReadme from 'components/form/date-input/date-input-README.md';
import DayPickerDocs from 'components/form/day-picker/day-picker-DOCS.md';
import README from 'components/form/day-picker/day-picker-README.md';
import React from 'react';

import { decorator } from '../../utils/decorator';
import { WrappedComponent } from '../helpers/wrapped';

export default decorator('DayPicker', DayPickerDocs, README).add('DayPicker', () => {
  const [value, setValue] = React.useState(new Date());
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const handleChange = ( val ) => {
    setValue(val);
  };

  return (
    <WrappedComponent style={{ minHeight: '500px' }}>
      <Row style={{ justifyContent: 'space-around', alignItems: 'flex-start' }}>
        <Col xs="12" md="12" lg="12">
          <DayPicker
            subTitle='Start date'
            value={ value }
            onChange={ handleChange }
            format='MM/dd/yyyy'
            placeholder='mm/dd/yy'
          />
        </Col>
      </Row>
      <Row style={{ justifyContent: 'space-around', alignItems: 'flex-start' }}>
        <Col xs="12" md="12" lg="12">
          <DayPicker
            isTimePicker
            value={ value }
            onChange={ handleChange }
            format='MM/dd/yyyy HH:mm'
            placeholder='mm/dd/yy 00:00'
          />
        </Col>
      </Row>
    </WrappedComponent>
  );
});

const inputs1 = [
  {
    title: 'Day',
    type: 'date',
    format: 'dd',
    placeholder: '01',
  },
  {
    title: 'Month',
    type: 'month',
    format: 'MM',
    placeholder: '12',
  },
  {
    title: 'Year',
    type: 'year',
    format: 'yyyy',
    placeholder: '2021',
  },
];

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const inputs2 = [
  {
    title: 'Day',
    type: 'date',
    format: 'dd',
    placeholder: '01',
  },
  {
    title: 'Month',
    type: 'month',
    format: 'MM',
    placeholder: '01',
  },
];

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const inputs3 = [
  {
    title: 'Month',
    type: 'month',
    format: 'MM',
    placeholder: '12',
  },
  {
    title: 'Year',
    type: 'year',
    format: 'yyyy',
    placeholder: '2021',
  },
];

export const DateInputStory = decorator('DateInput', DateInputDocs, DateInputReadme).add('DateInput', () => {
  const [value, setValue] = React.useState(new Date());
  const [value2, setValue2] = React.useState(new Date());
  const [value3, setValue3] = React.useState(new Date());
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const handleChange = ( val ) => {
    setValue(val);
  };
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const handleChange2 = ( val ) => {
    setValue2(val);
  };

  const handleChange3 = ( val ) => {
    setValue3(val);
  };


  return (
    <WrappedComponent>
      <div style={ { display: 'flex', flexDirection: 'column' } }>
        <Row style={ {
          alignItems: 'flex-start',
          marginBottom: '1rem',
          marginTop: '1rem',
        } }>
          <Col xs="12" md="12" lg="12">
            <DateInput
              inputs={ inputs2 }
              onChange={ handleChange2 }
              value={ value2 }
            />
          </Col>
        </Row>
        <Row style={ { alignItems: 'flex-start', marginBottom: '1rem' } }>
          <Col xs="12" md="12" lg="12">
            <DateInput
              inputs={ inputs1 }
              value={ value }
              onChange={ handleChange } />
          </Col>
        </Row>
        <Row style={ { alignItems: 'flex-start', marginBottom: '1rem' } }>
          <Col xs="12" md="12" lg="12">
            <DateInput
              inputs={ inputs3 }
              value={ value3 }
              onChange={ handleChange3 } />
          </Col>
        </Row>
        <Row style={ { alignItems: 'flex-start', marginBottom: '1rem' } }>
          <Col xs="12" md="12" lg="12">
            <p style={ {
              fontSize: '14px',
              lineHeight: '150%',
              marginBottom: '.5rem',
            } }>
              Min Date - 01/01
            </p>
            <DateInput
              minDate={ new Date('01/01/2021') }
              inputs={ inputs2 }
              onChange={ handleChange2 }
              divider='/'
              value={ value2 }
            />
          </Col>
        </Row>
        <Row style={ { alignItems: 'flex-start', marginBottom: '1rem' } }>
          <Col xs="12" md="12" lg="12">
            <p
              style={ { fontSize: '14px', lineHeight: '150%' } }
            >
              Min Date - 01/01/2017
            </p>
            <p style={ {
              fontSize: '14px',
              lineHeight: '150%',
              marginBottom: '.5rem',
            } }>Max Date - 01/01/2022</p>
            <DateInput
              minDate={ new Date('01/01/2017') }
              maxDate={ new Date('01/01/2022') }
              divider='/'
              inputs={ inputs1 }
              value={ value }
              onChange={ handleChange } />
          </Col>
        </Row>
        <Row style={ { alignItems: 'flex-start', marginBottom: '1rem' } }>
          <Col s='12' m='12' l='12'>
            <p style={ {
              fontSize: '14px',
              lineHeight: '150%',
              marginBottom: '.5rem',
            } }>
              Max Date - 06/2025
            </p>
            <DateInput
              maxDate={ new Date('06/01/2025') }
              divider='/'
              inputs={ inputs3 }
              value={ value3 }
              onChange={ handleChange3 } />
          </Col>
        </Row>
      </div>
    </WrappedComponent>
  );
});
