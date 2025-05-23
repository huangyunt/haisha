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

export { images }
