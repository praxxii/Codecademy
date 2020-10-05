const apiKey ='Td9-ovTv5K6DMM7oLWMjYc5EVY_T3ZFHvp-t8JzJBlK7J5qChPplqFLW_fVxWBf51EcoZaR0vcrfNBl-Fqg_zt-n5pbv0D3Vjsp_gVK9fH5zuy0suPpoijEHUEB7X3Yx';

const Yelp = {
    search(term, location, sortBy) {
        return fetch(`https://cors-anywhere.herokuapp.com/api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, 
        {
            headers: {Authorization: `Bearer ${apiKey}`}
        })
      .then((response)=> 
      {
        return response.json();
      })
      .then(jsonResponse => 
        {
            if (jsonResponse.businesses) {
            return jsonResponse.businesses.map(business => ({
                    id: business.id,
                    imageSrc: business.image_url,
                    name: business.name,
                    address: business.location.address1,
                    city: business.location.city,
                    state: business.location.state,
                    zipCode: business.location.zip_code,
                    category: business.categories[0].title,
                    rating: business.rating,
                    reviewCount: business.review_count
               
            }));
         } 
        });
    } 

};

export default Yelp;