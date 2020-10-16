import Images from '../models/Images';

export default {
   render(image: Images) {
     return {
        id: image.id,
        url: `http://192.168.1.85:3334/uploads/${image.path}`,
     };
   },

   renderMany(image: Images[]) {
     return image.map(image => this.render(image));
   }
}