let menu = ['Cafe', ' Cam vắt', ' Nước ép cà rốt', 'Nước ép cà chua', 'Nước lọc', 'Nước dừa'];
let money = [20000, 50000, 50000, 50000, 15000, 30000];

function showMenu() {
    let show = '';
    for (let i = 0; i < menu.length; i++) {
        show += ' <tr>\n' +
            '            <th>' + menu[i] + '</th>\n' +
            '            <th><button onclick="sl('+a+')">SL</button></th>\n' +
            '            <th>' + money[i] + '</th>\n' +
            '        </tr>'

    }
    document.getElementById('showResult').innerHTML = show;
}

showMenu()
function sl(a) {
    a = prompt('số lượng bạn muốn mua');

    showMenu()
}