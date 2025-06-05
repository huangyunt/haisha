const images = {
    "1": Array(192).fill(0).map((_, index) =>
    (
        'https://636c-cloud1-6geu18jg425a604e-1360744728.tcb.qcloud.la/1.CASA%E9%98%85%E8%AF%BB%E4%B8%8E%E8%87%AA%E6%8B%BC-%E5%9B%BE%E7%89%87/CASA%E9%98%85%E8%AF%BB%E4%B8%8E%E8%87%AA%E6%8B%BCReading%20%26%20Phonics%201_' + (index + 1) + '.png'
    )),
    "2": Array(192).fill(0).map((_, index) =>
    (
        'https://636c-cloud1-6geu18jg425a604e-1360744728.tcb.qcloud.la/2.CASA%E9%98%85%E8%AF%BB%E4%B8%8E%E8%87%AA%E6%8B%BC-%E5%9B%BE%E7%89%87/CASA%E9%98%85%E8%AF%BB%E4%B8%8E%E8%87%AA%E6%8B%BCReading%20%26%20Phonics%202_' + (index + 1) + '.png'
    )),
    "3": Array(194).fill(0).map((_, index) =>
    (
        'https://636c-cloud1-6geu18jg425a604e-1360744728.tcb.qcloud.la/3.CASA%E9%98%85%E8%AF%BB%E4%B8%8E%E8%87%AA%E6%8B%BC-%E5%9B%BE%E7%89%87/CASA%E9%98%85%E8%AF%BB%E4%B8%8E%E8%87%AA%E6%8B%BCReading%20%26%20Phonics%203_' + (index + 1) + '.png'
    )),
    "4": Array(196).fill(0).map((_, index) =>
    (
        'https://636c-cloud1-6geu18jg425a604e-1360744728.tcb.qcloud.la/4.CASA%E9%98%85%E8%AF%BB%E4%B8%8E%E8%87%AA%E6%8B%BC-%E5%9B%BE%E7%89%87/CASA%E9%98%85%E8%AF%BB%E4%B8%8E%E8%87%AA%E6%8B%BCReading%20%26%20Phonics%204_' + (index + 1) + '.png'
    )),
}

Object.entries(images).forEach(([_, value]) => {
    value.splice(1, 1);
})

const concatImages = {
    "5": Array(5).fill(0).map((_, index) =>
    (
        'https://636c-cloud1-6geu18jg425a604e-1360744728.tcb.qcloud.la/CASA%E6%89%98%E7%A6%8F%E9%9B%85%E6%80%9DSAT%E5%AD%A6%E7%A7%91-1/CASA%E6%89%98%E7%A6%8F%E9%9B%85%E6%80%9DSAT%E5%AD%A6%E7%A7%91(1)_' + (index + 1) + '.png'
    )),
    "6": Array(3).fill(0).map((_, index) =>
    (
        'https://636c-cloud1-6geu18jg425a604e-1360744728.tcb.qcloud.la/%E6%B5%B7%E6%B2%99%E8%AF%BE%E7%A8%8B%E6%B5%B7%E6%8A%A5/%E6%B5%B7%E6%B2%99%E8%AF%BE%E7%A8%8B_' + (index + 1) + '.png'

    )),
    ...images,
}
export { concatImages };