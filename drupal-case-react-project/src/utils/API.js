import axios from 'axios';

export default {
  // Get content from Drupal site
  getContent: function() {
    return axios.get("http://research.dd:8083/node/21?_format=hal_json");
  },
  getImages: function(nodeNumber) {
    axios.get("http://research.dd:8083/node/" + nodeNumber + "?_format=hal_json")
    .then(result => {
      const imgObject = {
        images: []
      }
      const html = result.data.body[0].processed;
      const element = document.createElement("div");
      element.innerHTML = html;

      const imagesToSend = element.getElementsByTagName("img");
      for(let i = 0; i < imagesToSend.length; i++) {
        imgObject.images.push(imagesToSend[i].src);
      }
      return imgObject;
    });
  }
}