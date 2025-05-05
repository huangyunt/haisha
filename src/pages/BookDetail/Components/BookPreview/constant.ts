export const images = Array(100).fill(0).map((_, index) =>
    'https://7778-wx-miniprogram-3gei9ggi2b00c55a-1356783767.tcb.qcloud.la/PDF-CONVERT-IMAGE/Oxford_Phonics_World_1_SB-images-' + index + '.jpg',
)


export const catalogList = [
    {
        name: 'Unit 1 Aa Bb Cc',
        page: 4
    },
    {
        name: 'Unit 2 Dd Ee Ff',
        page: 12
    },
    {
        name: 'Unit 3 Gg Hh Ii',
        page: 24
    },
    {
        name: 'Unit 4 Jj Kk Ll',
        page: 32
    },
    {
        name: 'Unit 5 Mm Nn Oo',
        page: 44
    },
    {
        name: 'Unit 6 Pp Qq Rr',
        page: 52
    },
    {
        name: 'Unit 7 Ss Tt Uu Vv',
        page: 64
    },
    {
        name: 'Unit 8 Ww Xx Yy Zz',
        page: 74
    },
]

export const audioList = Array(100).fill(0).map(() => (
    [
        'https://7778-wx-miniprogram-3gei9ggi2b00c55a-1356783767.tcb.qcloud.la/Oxford%20Phonics%20World_1_SB_CD1/Track01.mp3',
        'https://7778-wx-miniprogram-3gei9ggi2b00c55a-1356783767.tcb.qcloud.la/Oxford%20Phonics%20World_1_SB_CD1/Track02.mp3',
        'https://7778-wx-miniprogram-3gei9ggi2b00c55a-1356783767.tcb.qcloud.la/Oxford%20Phonics%20World_1_SB_CD1/Track03.mp3',
    ]
)
)
// (x - 50)/427, (y - 362)/555
export const newAudioList = {
    1: [],
    2: [],
    3: [],
    4: [],
    5: [
        {
            offset: [215, 422],
            url: 'https://7778-wx-miniprogram-3gei9ggi2b00c55a-1356783767.tcb.qcloud.la/Oxford%20Phonics%20World_1_SB_CD1/Track02.mp3',
        },
        {
            offset: [255, 605],
            url: 'https://7778-wx-miniprogram-3gei9ggi2b00c55a-1356783767.tcb.qcloud.la/Oxford%20Phonics%20World_1_SB_CD1/Track02.mp3',
        }
    ],
    6: [
        {
            offset: [316, 548],
            url: 'https://7778-wx-miniprogram-3gei9ggi2b00c55a-1356783767.tcb.qcloud.la/Oxford%20Phonics%20World_1_SB_CD1/Track02.mp3',
        },
        {
            offset: [208, 775],
            url: 'https://7778-wx-miniprogram-3gei9ggi2b00c55a-1356783767.tcb.qcloud.la/Oxford%20Phonics%20World_1_SB_CD1/Track02.mp3',
        }
    ],
    7: [
        {
            offset: [212, 421],
            url: 'https://7778-wx-miniprogram-3gei9ggi2b00c55a-1356783767.tcb.qcloud.la/Oxford%20Phonics%20World_1_SB_CD1/Track02.mp3',
        },
        {
            offset: [254, 605],
            url: 'https://7778-wx-miniprogram-3gei9ggi2b00c55a-1356783767.tcb.qcloud.la/Oxford%20Phonics%20World_1_SB_CD1/Track02.mp3',
        }
    ],
}