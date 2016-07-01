import * as React from 'react';

import { NotFound } from '../pages/not_found';

const dateFormat = require('dateformat');

import * as styles from './show_submission.css!';

export class ShowSubmission extends React.Component<any, any> {
  render() {
    const { submission, deleteSubmission } = this.props;

    if (!submission) {
      return <NotFound message="Perhaps head back to the submission list?" />;
    }

    const createdAt = new Date(submission.created_at);
    const data = JSON.parse(submission.data);

    return (
      <div className={styles.container}>
        <header className={styles.header}>
          <time className={styles.time} >Submitted on {dateFormat(createdAt, 'dd/mm/yy')} at {dateFormat(createdAt, 'HH:MM')}</time>

          <nav className={styles.dashboard}>
            <button type="button" className="flat danger" onClick={() => deleteSubmission(submission.id)}>Delete</button>
          </nav>
        </header>

        <ol className={styles.data}>
          {
            Object.keys(data).map(field =>
              <li className={styles.field} key={field}>
                <h4 className={styles.h4}>{field}</h4>

                <div className={styles.value}>
                  {data[field]}
                </div>
              </li>
            )
          }
        </ol>
      </div>
    );
  }
}
