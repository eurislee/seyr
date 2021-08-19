import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Button from '../components/button';
import { SuccessIcon } from '../components/icon';

import './styles/button.styl';
import "../components/button/index.styl";

storiesOf('Buttons', module)
    .add('Basic Buttons', () => (
        <div className="button-example">

            <Button type="primary" onClick={action('clicked')}>
              Primary
            </Button>

            <Button type="info" onClick={action('clicked')}>
              Info
            </Button>

            <Button type="warning" onClick={action('clicked')}>
              Warning
            </Button>

            <Button type="error" onClick={action('clicked')}>
              Error
            </Button>

            <Button type="success" onClick={action('clicked')}>
              Success
            </Button>

            <Button disabled onClick={action('clicked')}>
              Disabled
            </Button>

            <Button type="primary" dashed onClick={action('clicked')}>
              Dashed
            </Button>

            <Button type="primary" loading={true} onClick={action('clicked')}>
              Loading
            </Button>

            <Button type="primary" block onClick={action('clicked')}>
              100%
            </Button>

        </div>
    ))

    .add('Hollow Buttons', () => (
        <div className="button-example">

            <Button type="primary" hollow onClick={action('clicked')}>
              Primary
            </Button>

            <Button type="info" hollow onClick={action('clicked')}>
              Info
            </Button>

            <Button type="warning" hollow onClick={action('clicked')}>
              Warning
            </Button>

            <Button type="error" hollow onClick={action('clicked')}>
              Warning
            </Button>

            <Button type="success" hollow onClick={action('clicked')}>
              Success
            </Button>
            <Button type="error" hollow disabled onClick={action('clicked')}>
              Error
            </Button>

            <Button type="info" hollow dashed onClick={action('clicked')}>
              Info Dashed
            </Button>

            <Button type="error" hollow dashed disabled onClick={action('clicked')}>
              Error Dashed Disabled
            </Button>


            <Button type="primary" hollow loading={true} onClick={action('clicked')}>
              Loading
            </Button>

            <Button type="primary" hollow block onClick={action('clicked')}>
              100%
            </Button>
        </div>
    ))
    .add('Disable Buttons', () => (
        <div className="button-example">

            <Button disabled onClick={action('clicked')}>
              Default
            </Button>

            <Button type="primary" disabled onClick={action('clicked')}>
              Primary
            </Button>

            <Button type="info" disabled onClick={action('clicked')}>
              Info
            </Button>

            <Button type="warning" disabled onClick={action('clicked')}>
              Warning
            </Button>

            <Button type="error" disabled onClick={action('clicked')}>
              Error
            </Button>

            <Button type="success" disabled onClick={action('clicked')}>
              Success
            </Button>

            <Button type="primary" disabled block onClick={action('clicked')}>
              100%
            </Button>

            <Button disabled hollow onClick={action('clicked')}> Default </Button>

            <Button type="primary" disabled hollow onClick={action('clicked')}> Primary </Button>

            <Button type="info" disabled hollow onClick={action('clicked')}> Info </Button>

            <Button type="warning" disabled hollow onClick={action('clicked')}> Warning </Button>

            <Button type="error" disabled hollow onClick={action('clicked')}> Error </Button>

            <Button type="success" disabled hollow onClick={action('clicked')}> Success </Button>

        </div>
    ))

    .add('Size Buttons', () => (
        <div className="button-example">

            <Button type="primary" size="large">
              large
            </Button>

            <Button type="primary">
              default
            </Button>

            <Button type="primary" size="small">
              small
            </Button>

        </div>
    ))

    .add('Round Buttons', () => (
        <div className="button-example">
            <Button type="primary" circle>
              <SuccessIcon />
            </Button>

            <Button type="info" circle>
              <SuccessIcon />
            </Button>

            <Button type="error" circle>
              <SuccessIcon />
            </Button>

            <Button type="success" circle>
              <SuccessIcon />
            </Button>

            <Button type="primary" disabled circle>
              <SuccessIcon />
            </Button>

            <Button type="warning" dashed circle>
              <SuccessIcon />
            </Button>

            <Button type="primary" hollow dashed circle>
              <SuccessIcon />
            </Button>

            <Button type="primary" loading circle>
              <SuccessIcon />
            </Button>

            <Button type="error" hollow circle>
              <SuccessIcon />
            </Button>

            <Button type="info" hollow circle disabled>
              <SuccessIcon />
            </Button>

            <Button type="primary" circle size="small">
              Small
            </Button>
            <Button type="primary" circle>
              Medium
            </Button>
            <Button type="primary" circle size="large">
              Large
            </Button>

        </div>
    )
);
