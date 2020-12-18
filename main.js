var names = [
    "Grandfather - Aditya Prakash Jha",
    "Father - Ravindra Kumar Jha",
    "Mother - Shalini Jha",
    "Elder Sister - Sangini Jha",
    "Elder Sister - Suhani Jha",
    "Son(Me) - Srajan Jha",
];

var images = [
    "https://www.canva.com/design/DAEQSeWG7Yo/Dp3S4hMAsrJfv97ZUcavWw/view?utm_content=DAEQSeWG7Yo&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink",
    "https://www.canva.com/design/DAEQrR2apRE/pbwis0lThE-NA5a6TET8qA/view?utm_content=DAEQrR2apRE&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink",
    "https://www.canva.com/design/DAEQrQDOXck/JOh77gis5rldqel_O2esWQ/view?utm_content=DAEQrQDOXck&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink",
    "https://www.canva.com/design/DAEQrVbapJc/t_xwZqw8VLDtyrOLkw5kPg/view?utm_content=DAEQrVbapJc&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink",
    "https://www.canva.com/design/DAEQrfPagDU/fBggs5i3UwWzRphXKZes7Q/view?utm_content=DAEQrfPagDU&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink",
    "https://www.canva.com/design/DAEQrchPX0U/aL21I5tKVxKFGMi820in8Q/view?utm_content=DAEQrchPX0U&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink",
    "https://www.canva.com/design/DAEQrSJ5qu4/HZi8GK_VrmGcRsRytUdG5w/view?utm_content=DAEQrSJ5qu4&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink",
];

var i = 0;

function nextslide() {
    document.getElementById("members").innerHTML = names[i];
    document.getElementById("family").src = images[i];
    i++;
}