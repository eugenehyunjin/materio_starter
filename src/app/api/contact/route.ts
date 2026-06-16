import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

import nodemailer from 'nodemailer'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()

    const { name, company, phone, email, inquiryType, content } = body

    if (!name || !phone || !email || !inquiryType || !content) {
      return NextResponse.json(
        {
          success: false,
          message: '필수 항목을 입력해주세요.'
        },
        {
          status: 400
        }
      )
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
      }
    })

    await transporter.sendMail({
      from: `"아파트리 홈페이지" <${process.env.SMTP_USER}>`,
      to: process.env.MAIL_TO,
      subject: `[비케이위너 홈페이지 문의] ${inquiryType}`,

      html: `
        <div style="
          max-width:700px;
          margin:0 auto;
          font-family:'Pretendard','Malgun Gothic',sans-serif;
          color:#222;
          line-height:1.8;
          padding:24px;
        ">
          <h2 style="
            margin:0 0 20px;
            color:#00A887;
            font-size:24px;
          ">
            아파트리 홈페이지 문의
          </h2>

          <p style="
            margin-bottom:24px;
            color:#666;
          ">
            홈페이지를 통해 새로운 문의가 접수되었습니다.
          </p>

          <hr style="border:none;border-top:1px solid #e5e5e5;margin:20px 0;" />

          <div style="margin-bottom:18px;">
            <div style="font-weight:700;color:#111;">문의 유형</div>
            <div>${inquiryType}</div>
          </div>

          <div style="margin-bottom:18px;">
            <div style="font-weight:700;color:#111;">이름</div>
            <div>${name}</div>
          </div>

          <div style="margin-bottom:18px;">
            <div style="font-weight:700;color:#111;">회사명</div>
            <div>${company || '-'}</div>
          </div>

          <div style="margin-bottom:18px;">
            <div style="font-weight:700;color:#111;">연락처</div>
            <div>${phone}</div>
          </div>

          <div style="margin-bottom:18px;">
            <div style="font-weight:700;color:#111;">이메일</div>
            <div>${email}</div>
          </div>

          <div style="margin-bottom:18px;">
            <div style="font-weight:700;color:#111;">문의 내용</div>

            <div style="
              margin-top:8px;
              padding:16px;
              background:#f8f9fa;
              border-radius:10px;
              white-space:pre-wrap;
            ">
${content}
            </div>
          </div>

          <hr style="border:none;border-top:1px solid #e5e5e5;margin:24px 0;" />

          <div style="
            font-size:12px;
            color:#999;
          ">
            본 메일은 아파트리 홈페이지 문의하기를 통해 자동 발송되었습니다.
          </div>
        </div>
      `
    })

    return NextResponse.json({
      success: true,
      message: '문의가 정상적으로 접수되었습니다.'
    })
  } catch (error) {
    console.error(error)

    return NextResponse.json(
      {
        success: false,
        message: '메일 발송 중 오류가 발생했습니다.'
      },
      {
        status: 500
      }
    )
  }
}
