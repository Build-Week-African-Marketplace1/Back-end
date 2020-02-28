
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('inputs')
  .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('inputs').insert([
        {
          category: 'Animal Products', 
          item:'Local Eggs',
          price:'20 KES',
          location:'Kenya',
          description:'Kenyan organic eggs',
         
        },

        {
          category: 'Beans', 
          item:'Mixed Beans',
          price:'15 UGX',
          location:'Uganda',
          description:'Ugandan mixed beans',
          
          },

        { 
          category: 'Cereals', 
          item:'Dry Maize',
          price:'35 TZS',
          location:'Tanzania',
          description:'Tanzanian dry maize',
          
        },
          { 
          category: 'Fruits', 
          item:'Lemons',
          price:'3 RWF',
          location:'Rwanda',
          description:'Rwandan lemons',
          
        },
          { 
          category: 'Vegetables', 
          item:'Onions',
          price:'5 SSP',
          location:'South Sudan',
          description:'South Sudanese organic onions',
          
        },
          { 
          category: 'Seeds & Nuts', 
          item:'Simsim',
          price:'15 BIF',
          location:'Burundi',
          description:'Burundian simsim',
         
        },
          { 
          category: 'Other', 
          item:'Coffee',
          price:'33 KES',
          location:'Kenya',
          description:'Kenyan organic coffee',
          
        },
          { 
          category: 'Peas', 
          item:'Green Peas',
          price:'7 RWF',
          location:'Rwanda',
          description:'Rwandan peas',
          
        },
          { 
          category: 'Animal Products', 
          item:'Chicken',
          price:'21 SSP',
          location:'South Sudan',
          description:'South Sudanese chicken',
         
        },
          { 
          category: 'Roots & Tubers', 
          item:'Cassava Chips',
          price:'5 TZS',
          location:'Tanzania',
          description:'Tanzanian cassava chips',
          
        },
          { 
          category: 'Beans', 
          item:'Kidney Beans',
          price:'11 UGX',
          location:'Uganda',
          description:'Ugandan kidney beans',
         
        },
         { 
          category: 'Animal Products', 
          item:'Beef',
          price:'17 BIF',
          location:'Burundi',
          description:'Burundian beef',
          
        },
          { 
          category: 'Fruits', 
          item:'Bananas',
          price:'17 RWF',
          location:'Rwanda',
          description:'Rwandan bananas',
          
        },
         { 
          category: 'Other', 
          item:'Tea',
          price:'30 KES',
          location:'Kenya',
          description:'Kenyan organic tea',
          
        },
      ]);
    });
};
