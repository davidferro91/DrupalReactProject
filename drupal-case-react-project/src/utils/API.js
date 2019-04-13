import axios from 'axios';

export default {
  // Get content from Drupal site
  getContent: function(nodeNumber) {
    return axios.get("http://research.dd:8083/node/" + nodeNumber + "?_format=hal_json");
  }
}