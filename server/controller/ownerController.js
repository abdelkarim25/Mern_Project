import Owner from "../model/ownerModel.js";


export const create = async(req, res) =>{
    try{
            const newOwner = new Owner(req.body);
            const {Adress} = newOwner;

            const ownerExixt = await Owner.findOne({Adress});
            if(ownerExixt){
                return res.status(400).json({message: "Owner already exists."});
            }
            const savedData = await newOwner.save();
            res.status(200).json(savedData);
    }catch (error) {
        res.status(500).json({errorMessage:error.message});
}
};

export const getAllOwners = async(req, res) =>{
    try{
        const ownerData = await Owner.find();
        if(!ownerData || ownerData.length === 0){
            return res.status(404).json({message: "Owner data not found."});
        }
        res.status(200).json(ownerData);
    }catch (error) {
        res.status(500).json({errorMessage: error.message});
    }
};

export const getOwnerById = async (req, res) => {
    try {
        const id = req.params.id;
        const ownerExist = await Owner.findById(id);
        if(!ownerExist) {
            return res.status(404).json({message: "Owner not found."});
        }
        res.status(200).json(ownerExist);
    } catch (error) {
        res.status(500).json({errorMessage: error.message});
    }
};

export const update = async (req, res) =>{
    try {
        const id = req.params.id;
        const ownerExist = await Owner.findById(id);
        if(!ownerExist) {
            return res.status(404).json({message: "Owner not found."});
        } 
        const updatedData = await Owner.findByIdAndUpdate(id, req.body, {
            new:true
        });
        res.status(200).json(updatedData);
    } catch (error) {
        res.status(500).json({errorMessage: error.message});
    }
};

export const deletOwner = async (req, res) =>{
    try {
        const id = req.params.id;
        const ownerExist = await Owner.findById(id);
        if(!ownerExist) {
            return res.status(404).json({message: "Owner not found."});
        }
        await Owner.findByIdAndDelete(id);
        res.status(200).json({message:"Owner deleted successfully."});
    } catch (error) {
        res.status(500).json({errorMessage: error.message});
    }
}