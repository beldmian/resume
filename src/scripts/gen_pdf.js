import pdfmake from "pdfmake/build/pdfmake"
import pdffonts from "pdfmake/build/vfs_fonts"

function hr(light = false) {
    return {
        canvas: [{
            type: 'line',
            x1: 0,
            y1: 5,
            x2: 520,
            y2: 5,
            lineWidth: light ? 0.5 : 1,
            lineColor: light ? '#dedede' : '#ccc'
        }]
    }
}

export function generatePDF(data) {
    pdfmake.vfs = pdffonts.pdfMake.vfs
    var outBlob
    pdfmake.createPdf({
        pageSize: 'A4',
        pageMargins: 40,
        content: [
            {
                text: data.header.name,
                style: 'header'
            },
            {
                columns: Object.values(data.header.socials).map((v) => ({
                    width: 'auto',
                    text: v.label,
                    link: v.link,
                    decoration: 'underline',
                    color: 'blue',
                })),
                columnGap: 5,
            },
            hr(),
            {
                text: 'О себе',
                style: 'subheader'
            },
            hr(),
            {
                text: data.about.text,
                marginTop: 5,
            },
            {
                columns: Array.prototype.concat(
                    data.about.key_points.strong.map((v) => ({
                        width: 'auto',
                        text: v,
                        color: '#178800',
                    })),
                    data.about.key_points.additional.map((v) => ({
                        width: 'auto',
                        text: v,
                    })),
                    data.about.key_points.other.map((v) => ({
                        width: 'auto',
                        text: v,
                        color: '#888',
                    }))
                ),
                marginTop: 5,
                columnGap: 5,
                bold: true,
            },
            {
                text: 'Образование',
                style: 'subheader'
            },
            hr(),
            ...data.education.map((ed) => ([
                {
                    text: ed.name,
                    fontSize: 20,
                    marginTop: 5,
                },
                {
                    columns: [
                        {
                            width: 'auto',
                            text: ed.type,
                        },
                        {
                            width: 'auto',
                            text: ed.profile,
                        },
                        {
                            width: 'auto',
                            text: `${ed.startDate} - ${ed.endDate}`
                        },
                    ],
                    columnGap: 10,
                    bold: true,
                },
                ed.description,
                hr(true),
            ])),
            {
                text: 'Опыт работы',
                style: 'subheader'
            },
            hr(),
            ...data.work_experience.map((we) => ([
                {
                    text: we.position,
                    fontSize: 20,
                    marginTop: 5,
                },
                {
                    columns: [
                        {
                            width: 'auto',
                            text: we.company,
                        },
                        {
                            width: 'auto',
                            text: `${we.startDate} - ${we.endDate}`
                        },
                    ],
                    columnGap: 10,
                    bold: true,
                },
                {
                    ul: we.tasks
                },
                hr(true),                                
            ])),
            {
                text: 'Проекты',
                style: 'subheader'
            },
            hr(),
            {
                text: 'Академические достижения',
                style: 'subheader'
            },
            hr(),
            {
                text: 'Практические достижения',
                style: 'subheader'
            },
            hr(),
        ],
        styles: {
            header: {
                fontSize: 30,
                bold: true
            },
            subheader: {
                fontSize: 24,
                marginTop: 10,
            },
        },
        defaultStyle: {
            marginTop: 5,
        }
    }).download("Belousov_Dmitry_resume.pdf")
    return outBlob
}