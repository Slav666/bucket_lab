use bucket;
db.dropDatabase();

db.bucketItems.insertMany([
{
  wish: "Pour the perfect espresso"
},
{
  wish: "Buy a boat"
},
{
  wish: "Climb Mt. Everest"
}
]);
