import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import VacancySign from './VacancySign'
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(<VacancySign className="vacant" isVacant='true' />, document.getElementById('root'));
registerServiceWorker();
