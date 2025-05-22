const cities = ["Berlin", "Paris", "Cairo", "New York", "Tokyo"];
function findCity(city){
   if (cities.includes(city)) return "City Found";
   else return "City not found";

}
console.log(findCity("Paris")); // Output: "City found!"
console.log(findCity("Dubai")); // Output: "City not found!"