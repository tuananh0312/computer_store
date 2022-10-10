const img = require('../images/data.png');
const img2 = require('../images/Msi.jpg');
const Msi = require('../images/Msi2.jpg');
const dellVostro =require('../images/dellVostro.jpg');
const products =[{
    id:1,
    title: 'Laptop Dell Vostro 5502 Core i7-1165G7, Ram 16GB, SSD 512GB, GF MX330 2GB, 15.6 Inch FHD',
    description:"Laptop Dell Vostro 5502 là một sản phẩm laptop chuyên về đồ họa - kỹ thuật đến từ thương hiệu Dell nổi tiếng của Mỹ chuyên cho ra mắt người dùng những sản phẩm với nhiều tính năng vượt trội và có độ bền cao. Đây là một sản phẩm Laptop Dell đáng chú ý với thiết kế mỏng nhẹ, đáp ứng nhu cầu di chuyển và làm việc linh hoạt mọi nơi mọi lúc.",
    img:img,
    img2:dellVostro,
    category:"Dell",
    price:"15560000",


},
{
    id:2,
    title: 'Laptop Dell Vostro 5502 Core i7-1165G7, Ram 16GB, SSD 512GB, GF MX330 2GB, 15.6 Inch FHD',
    description:"Laptop Dell Vostro 5502 là một sản phẩm laptop chuyên về đồ họa - kỹ thuật đến từ thương hiệu Dell nổi tiếng của Mỹ chuyên cho ra mắt người dùng những sản phẩm với nhiều tính năng vượt trội và có độ bền cao. Đây là một sản phẩm Laptop Dell đáng chú ý với thiết kế mỏng nhẹ, đáp ứng nhu cầu di chuyển và làm việc linh hoạt mọi nơi mọi lúc.",
    img:img,
    img2:dellVostro,
    category:"Dell",
    price:"15560000",

},
{
    id:3,
    title: 'MSI Modern 14 B11MOU 847VN Core i7 1195G7/8GB/512GB/14 FHD/Win10/Nhôm Xám',
    description:"MSI Modern 14 B11MOU 847VN Core i7 là một sản phẩm đạt sự hoàn thiện cao với vỏ và khung máy làm bằng kim loại bền bỉ hạn chế hư hỏng do sự va chạm. Với CPU intel Tiger Lake cấu trúc 4 nhân 8 luồng tốc độ xung nhịp trung bình 2.90Ghz và đạt tối đa 5.0GHz đem lại độ phản hồi cao, đa nhiệm mượt và với thanh ram 8GB và tốc độ đọc ghi nhanh với SSD 512GB NVMe. Chiếc máy có hiệu năng cao, thiết kế đẹp với mức giá tốt hứa hẹn sẽ đem lại một sản phẩm tốt đáp ứng nhu cầu giải trí cũng như học tập của người dùng. ",
    img:img2,
    img2:Msi,
    category:"MSI",
    price:"17000000"
},
{
    id:4,
    title: 'MSI Modern 14 B11MOU 847VN Core i7 1195G7/8GB/512GB/14 FHD/Win10/Nhôm Xám',
    description:"MSI Modern 14 B11MOU 847VN Core i7 là một sản phẩm đạt sự hoàn thiện cao với vỏ và khung máy làm bằng kim loại bền bỉ hạn chế hư hỏng do sự va chạm. Với CPU intel Tiger Lake cấu trúc 4 nhân 8 luồng tốc độ xung nhịp trung bình 2.90Ghz và đạt tối đa 5.0GHz đem lại độ phản hồi cao, đa nhiệm mượt và với thanh ram 8GB và tốc độ đọc ghi nhanh với SSD 512GB NVMe. Chiếc máy có hiệu năng cao, thiết kế đẹp với mức giá tốt hứa hẹn sẽ đem lại một sản phẩm tốt đáp ứng nhu cầu giải trí cũng như học tập của người dùng. ",
    img:img2,
    img2:Msi,
    category:"MSI",
    price:"17000000"
}
,
{
    id:5,
    title: 'MSI Modern 14 B11MOU 847VN Core i7 1195G7/8GB/512GB/14 FHD/Win10/Nhôm Xám',
    description:"MSI Modern 14 B11MOU 847VN Core i7 là một sản phẩm đạt sự hoàn thiện cao với vỏ và khung máy làm bằng kim loại bền bỉ hạn chế hư hỏng do sự va chạm. Với CPU intel Tiger Lake cấu trúc 4 nhân 8 luồng tốc độ xung nhịp trung bình 2.90Ghz và đạt tối đa 5.0GHz đem lại độ phản hồi cao, đa nhiệm mượt và với thanh ram 8GB và tốc độ đọc ghi nhanh với SSD 512GB NVMe. Chiếc máy có hiệu năng cao, thiết kế đẹp với mức giá tốt hứa hẹn sẽ đem lại một sản phẩm tốt đáp ứng nhu cầu giải trí cũng như học tập của người dùng. ",
    img:img2,
    img2:Msi,
    category:"MSI",
    price:"17000000"
},
{   id:6,
    title: 'MSI Modern 14 B11MOU 847VN Core i7 1195G7/8GB/512GB/14 FHD/Win10/Nhôm Xám',
    description:"MSI Modern 14 B11MOU 847VN Core i7 là một sản phẩm đạt sự hoàn thiện cao với vỏ và khung máy làm bằng kim loại bền bỉ hạn chế hư hỏng do sự va chạm. Với CPU intel Tiger Lake cấu trúc 4 nhân 8 luồng tốc độ xung nhịp trung bình 2.90Ghz và đạt tối đa 5.0GHz đem lại độ phản hồi cao, đa nhiệm mượt và với thanh ram 8GB và tốc độ đọc ghi nhanh với SSD 512GB NVMe. Chiếc máy có hiệu năng cao, thiết kế đẹp với mức giá tốt hứa hẹn sẽ đem lại một sản phẩm tốt đáp ứng nhu cầu giải trí cũng như học tập của người dùng. ",
    img:img2,
    img2:Msi,
    category:"MSI",
    price:"17000000"
},
{
    id:7,
    title: 'MSI Modern 14 B11MOU 847VN Core i7 1195G7/8GB/512GB/14 FHD/Win10/Nhôm Xám',
    description:"MSI Modern 14 B11MOU 847VN Core i7 là một sản phẩm đạt sự hoàn thiện cao với vỏ và khung máy làm bằng kim loại bền bỉ hạn chế hư hỏng do sự va chạm. Với CPU intel Tiger Lake cấu trúc 4 nhân 8 luồng tốc độ xung nhịp trung bình 2.90Ghz và đạt tối đa 5.0GHz đem lại độ phản hồi cao, đa nhiệm mượt và với thanh ram 8GB và tốc độ đọc ghi nhanh với SSD 512GB NVMe. Chiếc máy có hiệu năng cao, thiết kế đẹp với mức giá tốt hứa hẹn sẽ đem lại một sản phẩm tốt đáp ứng nhu cầu giải trí cũng như học tập của người dùng. ",
    img:img2,
    img2:Msi,
    category:"MSI",
    price:"17000000"
},
{
    id:8,
    title: 'MSI Modern 14 B11MOU 847VN Core i7 1195G7/8GB/512GB/14 FHD/Win10/Nhôm Xám',
    description:"MSI Modern 14 B11MOU 847VN Core i7 là một sản phẩm đạt sự hoàn thiện cao với vỏ và khung máy làm bằng kim loại bền bỉ hạn chế hư hỏng do sự va chạm. Với CPU intel Tiger Lake cấu trúc 4 nhân 8 luồng tốc độ xung nhịp trung bình 2.90Ghz và đạt tối đa 5.0GHz đem lại độ phản hồi cao, đa nhiệm mượt và với thanh ram 8GB và tốc độ đọc ghi nhanh với SSD 512GB NVMe. Chiếc máy có hiệu năng cao, thiết kế đẹp với mức giá tốt hứa hẹn sẽ đem lại một sản phẩm tốt đáp ứng nhu cầu giải trí cũng như học tập của người dùng. ",
    img:img2,
    img2:Msi,
    category:"MSI",
    price:"17000000"
},

]
const getALLproducts =()=>{
    return (
        products
    )
}
const getProducts =(counts)=>{ 
    const max = products.length-counts
    const min =0;
    const start  = Math.floor(Math.random()*(max-min)+min)
    return products.slice(start,start+counts)
}
const productsData={
    getALLproducts,
    getProducts,
}
export default productsData