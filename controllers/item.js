const Item = require('../model/item');

exports.postItemData = async (req,res)=>{
    try{
        
        
        const name = req.body.name;
        const desc = req.body.desc;
        const price = req.body.price;
        const qty = req.body.qty;

      
        const data = await Item.create({name:name,desc:desc,price:price,qty:qty});
        res.status(201).json({newItemData:data});
    }catch(e){
       
       res.status(500).json({error:e});
    }
  
}

exports.getItemData = async (req,res)=>{
    try{
       const data = await Item.findAll();
       res.status(200).json({allItem:data})
    }catch(e){
        res.status(500).json({error:e})
    }
}

exports.postDeleteData = async (req,res)=>{
    try{
        if(!req.params.id == "undefined"){
           return res.status(400).json({err:"id not found"})
        }
        const itemId = req.params.id;
       await Item.destroy({where:{id:itemId}});
       res.sendStatus(200);
       }catch(e){
        res.status(500).json({error:e})
    }


}

exports.putItemData1 =  (req,res)=>{
    
    
    
    const id = req.params.id;

	Item.findByPk(id)
		.then(itemData => {
			console.log(itemData);
            itemData.decrement('qty',{ by: 1 })
           
			//return itemData.save();
		})
		.then(data => {
			//console.log(res, 'succesfully done');
            res.redirect("/item/get-item")
			res.status(201).json({newItemData:data});
		})
		.catch(err => console.log(err));
   
  


}
exports.putItemData2 = async (req,res)=>{
    const id = req.params.id;

    const qty = req.body.qty;


	Item.findByPk(id)
		.then(itemData => {
			
            itemData.qty =  qty-2;
			return itemData.save();
		})
		.then(data => {
			console.log(res, 'succesfully done');
			res.status(201).json({newItemData:data});
		})
		.catch(err => console.log(err));


}
exports.putItemData3 = async (req,res)=>{
    const id = req.params.id;
    const qty = req.body.qty;


	Item.findByPk(id)
		.then(itemData => {
			
            itemData.qty =  qty-3;
			return itemData.save();
		})
		.then(data => {
			console.log(res, 'succesfully done');
			res.status(201).json({newItemData:data});
		})
		.catch(err => console.log(err));


}