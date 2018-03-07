import axios from 'axios';


const API_URL = '/api';

export function postShorten(data) {
  return axios.post(`${API_URL}/shorten`, data)
    .then(response => response.data);
};

export function getShortcode(shortcode) {
  return axios.get(`${API_URL}/${shortcode}`)
    .then(response => response.data);
};

export function getShortcodeStats(shortcode) {
  return axios.get(`${API_URL}/${shortcode}/stats`)
    .then(response => response.data);
};
