const DetailBillCardVipModel =  require('./model');

const getAllDetailBill = async () =>{
    try {
        const DetailBill = await DetailBillCardVipModel.find({})
        return DetailBill;
    } catch (error) {
        console.log(error);
        throw new Error('Xảy ra lỗi khi lấy danh sách hóa đơn');
    }
}

//lấy chi tiết hóa đơn
const getDetailBillID =  async (id) =>{
    try {
        const DetailBill = await DetailBillCardVipModel.findById(id);
        return DetailBill;
    } catch (error) {
        console.log(error);
        throw new Error('Xảy ra lỗi khi lấy chi tiết hóa đơn')
    }
}

const createDetailBill = async (data) =>{
    try {
        const {name, detail, price, image, cardVip_id} = data;
        const DetailBill = new DetailBillCardVipModel({
            name: name,
            detail:detail,
            price:price,
            image:image,
            cardVip_id:cardVip_id,
        });
        await DetailBill.save();
    } catch (error) {
        console.log('error', error);
        throw new Error('Xảy ra lỗi khi thêm mới hóa đơn chi tiết');
    }
}

const deleteDetailBill = async (id) =>{
    try {
        await DetailBillCardVipModel.findOneAndDelete(id);
    } catch (error) {
        console.log('error', error);
        throw new Error('Xảy ra lỗi khi xóa hóa đơn chi tiết');
    }
}

module.exports = {
    getAllDetailBill,
    getDetailBillID,
    createDetailBill,
    deleteDetailBill
}