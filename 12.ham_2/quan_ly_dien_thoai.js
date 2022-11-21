let sanPham = ["Iphone 11", "Iphone10", "Samsung galasy S10", "Iphone 13 ProMax", "Iphone 11 ProMax"]

function showSanPham() {
    let show = "";
    for (let i = 0; i < sanPham.length; i++) {
        show += ' <tr>\n' +
            '        <td>'+sanPham[i]+'</td>\n' +
            '        <th><button onclick="editSanPham('+i+')">Edit</button></th>\n' +
            '        <th><button onclick="deleteSanPham('+i+')">Delete</button></th>\n' +
            '    </tr>'
    }
    document.getElementById('showResult').innerHTML = show;
}
showSanPham()
function addSanPham() {
    let add =document.getElementById('nhapSanPham').value;
    sanPham.push(add);
    showSanPham()
}
function deleteSanPham(index) {
sanPham.splice(index,1);
showSanPham()
}
function editSanPham(index) {
let newvalue =prompt("thay sản phẩm khác")
    sanPham[index]=newvalue;
showSanPham()
}