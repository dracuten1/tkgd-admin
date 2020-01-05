import React, { Component } from 'react';

import { accept, reject, ACCEPT } from './PostAction';

const dataPost = {
  postsData: [
    {
      id: 1,
      title: 'Sập vũ trường, nhiều người bị thương',
      img:
        'https://photo-2-baomoi.zadn.vn/w300_r3x2/2020_01_03_14_33536233/d75b8f0d6c4d8513dc5c.jpg',
      cate: 'Thời sự',
      des:
        'Sập vũ trường King Night ở Vũng Tàu: 1 người chết, 6 người bị thương',
      date: '02/01/2019 22:00 PM',
      status: 0,
      writer: 'Minh Long'
    },
    {
      id: 2,
      title: 'U-23 VN thiếu Văn Hậu, Triều Tiên vắng đồng đội của Ronaldo',
      img: 'https://image.anninhthudo.vn/w700/uploaded/83/2020_01_04/hau.jpg',
      cate: 'Thể thao',
      des:
        'Nguy cơ Đoàn Văn Hậu không được về khoác áo U-23 Việt Nam đá vòng chung kết U-23 châu Á',
      date: '02/01/2019 22:00 PM',
      status: 0,
      writer: 'Minh Long',
      content: (
        <div>
          <p>
            V&agrave;o 23h ng&agrave;y 3-1(giờ Việt Nam) fanpage của CLB
            Heerenveen đăng tải một loạt bức ảnh với ch&uacute; th&iacute;ch
            rằng đ&oacute; l&agrave; buổi luyện tập đầu ti&ecirc;n của
            c&aacute;c cầu thủ trong năm mới 2020 v&agrave; ng&agrave;y mai (tức
            4-1) cả đội sẽ di chuyển tới T&acirc;y Ban Nha nơi c&oacute; thời
            tiết ấm &aacute;p hơn.
          </p>
          <center>
            <table class="contentimg">
              <tbody>
                <tr>
                  <td class="img">
                    <img
                      src="http://static.cand.com.vn/Files/Image/nguyenbinh/2020/01/04/thumb_660_0b6d8043-038e-426e-994e-0b3e2c20de7a.jpg"
                      alt=""
                    />
                  </td>
                </tr>
                <tr>
                  <td class="note">
                    Văn Hậu đội mưa luyện tập. Ảnh:&nbsp;Heerenveen
                  </td>
                </tr>
              </tbody>
            </table>
          </center>
          <p>
            Như thường lệ, c&aacute;c CĐV Việt Nam ngay lập tức v&agrave;o
            t&igrave;m kiếm bức ảnh c&oacute; sự hiện diện của Văn Hậu. Sự quan
            t&acirc;m của người h&acirc;m mộ Việt Nam được thấy r&otilde; qua số
            lượt y&ecirc;u th&iacute;ch v&agrave; b&igrave;nh luận vượt
            trội.&nbsp;
          </p>
          <p>
            T&iacute;nh đến 11h s&aacute;ng 4-1, trong khi những bức ảnh
            kh&aacute;c chỉ nhận được khoảng 100 lượt th&iacute;ch th&igrave;
            con số n&agrave;y ở bức ảnh c&oacute; Văn Hậu l&ecirc;n tới 4.700
            v&agrave; thu h&uacute;t tới 274 lượt b&igrave;nh luận.
          </p>
          <center>
            <table class="contentimg">
              <tbody>
                <tr>
                  <td class="img">
                    <img
                      src="http://static.cand.com.vn/Files/Image/nguyenbinh/2020/01/04/thumb_660_93510286-8f52-4805-8fb5-798447ad075e.jpg"
                      alt=""
                    />
                  </td>
                </tr>
                <tr>
                  <td class="note">
                    Bức ảnh c&oacute; mặt Văn Hậu nhận được&nbsp; sự ch&uacute;
                    &yacute; cao từ CĐV Việt Nam
                  </td>
                </tr>
              </tbody>
            </table>
          </center>
          <p>
            Hầu hết c&aacute;c b&igrave;nh luận đều tỏ ra cảm th&ocirc;ng với sự
            kh&oacute; khăn trong luyện tập của cầu thủ người Việt Nam ở
            H&agrave; Lan, nhưng cũng c&oacute; kh&ocirc;ng &iacute;t
            b&igrave;nh luận kh&aacute; l&agrave; ... "dị".&nbsp;
          </p>
          <p>
            Đơn cử như một CĐV c&oacute; t&ecirc;n Nguyễn C&ocirc;ng Thanh
            khuy&ecirc;n Văn Hậu n&ecirc;n... đi cắt t&oacute;c sau khi chứng
            kiến m&aacute;i đầu ướt đẫm của cầu thủ n&agrave;y trong buổi tập.
            Một người kh&aacute;c th&igrave; nhận x&eacute;t rằng : "Trời mưa
            t&oacute;c d&agrave;i ướt v&atilde;i cả ướt đẫm v&igrave; tập luyện
            hơn c&aacute;c cầu thủ kh&aacute;c".
          </p>
        </div>
      )
    },
    {
      id: 3,
      title: 'Sáng mai 5-1, khởi tranh Giải "Chinh phục đỉnh cao Bà Rá"',
      img:
        'https://photo-1-baomoi.zadn.vn/w300_r3x2/2020_01_04_423_33536475/defb4fb9a4f94da714e8.jpg',
      cate: 'Thể thao',
      des:
        'Sáng mai 5-1, tại Bình Phước sẽ diễn ra Giải việt dã leo núi toàn quốc Chinh phục đỉnh cao Bà Rá lần thứ 26-2020',
      date: '02/01/2019 22:00 PM',
      status: -1,
      writer: 'Bá Long'
    },
    {
      id: 4,
      title: 'Giải ngoại hạng Anh: Liverpool vô đối',
      img:
        'https://photo-2-baomoi.zadn.vn/w300_r3x2/2020_01_03_423_33536122/10c2219bc2db2b8572ca.jpg',
      cate: 'Thể thao',
      des:
        'Liverpool thắng dễ Sheffield 2-0 để nối dài mạch bất bại và tiếp tục bỏ xa 2 đối thủ cạnh tranh',
      date: '02/01/2019 22:00 PM',
      status: 1,
      writer: 'Vũ Long'
    },
    {
      id: 5,
      img:
        'https://photo-2-baomoi.zadn.vn/w300_r3x2/2020_01_04_23_33540715/d90b71ebadab44f51dba.jpg',
      title: 'Thầy Park gặp riêng hàng thủ sau trận thua Bahrain',
      cate: 'Thể thao',
      des:
        'U23 thu được nhiều kết quả, nhưng HLV Park vẫn có những điều không hài lòng sau trận thua Bahrain ',
      date: '03/01/2019 10:00 AM',
      status: 0,
      writer: 'Vũ Long',
      content: (
        <div style={{ width: '100%' }}>
          <p class="t-j">
            {' '}
            Chiều 3/1, U23 Việt Nam c&oacute; trận đấu tổng duyệt gặp U23
            Bahrain tại Bangkok, nhằm chuẩn bị cho VCK U23 ch&acirc;u &Aacute;
            2020. Đ&acirc;y l&agrave; trận đấu HLV Park Hang Seo c&oacute; nhiều
            sự thử nghiệm, cả về nh&acirc;n sự lẫn lối chơi. Trong số 25 cầu
            thủ, &ocirc;ng thầy người H&agrave;n Quốc chỉ kh&ocirc;ng sử dụng
            duy nhất&nbsp;thủ m&ocirc;n Y &Ecirc;li Ni&ecirc;.
          </p>
          <p class="t-j">
            Ở trận đấu n&agrave;y,&nbsp;
            <a href="https://vietnamnet.vn/u23-viet-nam-tag62420.html">
              U23 Việt Nam
            </a>
            &nbsp;đ&atilde; bị đối thủ dẫn trước 2 b&agrave;n trong hiệp 1, sau
            đ&oacute; r&uacute;t ngắn v&agrave; ấn định tỷ số 1-2 với b&agrave;n
            thắng của Tấn Sinh tr&ecirc;n chấm 11m những ph&uacute;t cuối hiệp
            2.
          </p>

          <img
            src="https://vnn-imgs-f.vgcloud.vn/2020/01/04/11/u23-vietnam.jpg"
            alt="Thầy Park gặp ri&ecirc;ng h&agrave;ng thủ U23 Việt Nam sau trận thua Bahrain"
          />

          <p class="t-j">
            Với một trận giao hữu, r&otilde; r&agrave;ng mục đ&iacute;ch
            ch&iacute;nh l&agrave; thử nghiệm, v&agrave; HLV Park Hang Seo
            đ&atilde; thu được nhiều kết quả. Tuy nhi&ecirc;n, chiến lược gia
            người H&agrave;n Quốc cũng tỏ ra kh&ocirc;ng h&agrave;i l&ograve;ng
            với kh&acirc;u tổ chức của h&agrave;ng ph&ograve;ng ngự U23 Việt
            Nam.
          </p>

          <div class="box-taitro clearfix">
            <div class="VnnAdsPos clearfix" data-pos="vt_detail_sponsor_center">
              &nbsp;
            </div>
          </div>
          <p class="t-j">
            B&ecirc;n cạnh đ&oacute;, hai cầu thủ Thanh Thịnh v&agrave; Trọng
            H&ugrave;ng cũng chưa ho&agrave;n to&agrave;n b&igrave;nh phục. Hai
            trụ cột n&agrave;y tiếp tục được b&aacute;c sĩ Choi Ju Young đưa đi
            kiểm tra lại một lần nữa mức độ hồi phục sau trận thua Bahrain.
          </p>
          <p class="t-j">
            Tin vui với&nbsp;
            <a href="https://vietnamnet.vn/hlv-park-hang-seo-tag161113.html">
              HLV Park Hang Seo
            </a>
            &nbsp;l&agrave; sau trận đấu với Bahrain, U23 Việt Nam kh&ocirc;ng
            c&oacute; cầu thủ n&agrave;o chấn thương. &Ocirc;ng thầy người
            H&agrave;n Quốc cho c&aacute;c cầu thủ dự bị ra s&acirc;n tập
            s&aacute;ng 4/1, trong khi cầu thủ đ&aacute; ch&iacute;nh tập GYM
            tại kh&aacute;ch sạn.
          </p>
          <p class="t-j">
            U23 Việt Nam c&ograve;n 2 buổi tập nữa tại Bangkok, trước khi di
            chuyển 400km xuống Buriram để chuẩn bị bước v&agrave;o h&agrave;nh
            tr&igrave;nh "săn" v&eacute; Olympic 2020.
          </p>
        </div>
      )
    },
    {
      id: 6,
      img:
        'https://znews-photo.zadn.vn/w480/Uploaded/nugzrd/2020_01_04/cd76dda5a91750490906.jpg',
      title: 'Vợ hoảng hốt phát hiện chồng treo cổ sau hiên nhà',
      cate: 'Thời sự - Thường nhật',
      des:
        'Ngày 4/1, Cơ quan cảnh sát điều tra Công an tỉnh Bình Phước hoàn tất khám nghiệm hiện trường để điều tra cái chết của ông Vũ Anh Kiệt',
      date: '03/01/2019 12:00 AM',
      status: 0,
      writer: 'Vũ Long',
      content: (
        <div>
          <p>
            &Ocirc;ng Kiệt được người nh&agrave; ph&aacute;t hiện tử vong trong
            tư thế treo cổ.
          </p>
          <table class="picture" align="center">
            <tbody>
              <tr>
                <td class="pic">
                  <img
                    src="https://znews-photo.zadn.vn/w660/Uploaded/nugzrd/2020_01_04/cd76dda5a91750490906.jpg"
                    alt="Vo hoang hot phat hien chong treo co sau hien nha hinh anh 1 cd76dda5a91750490906.jpg"
                  />
                </td>
              </tr>
              <tr>
                <td class="pCaption caption">
                  <p>
                    Người nh&agrave; đang tổ chức hậu sự cho nạn nh&acirc;n.
                    Ảnh:&nbsp;<em>L.Ng&acirc;n.</em>
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
          <p>
            Th&ocirc;ng tin ban đầu, khoảng 5h20 c&ugrave;ng ng&agrave;y,
            b&agrave; B&ugrave;i Thị Ấm, vợ &ocirc;ng Kiệt mở cửa nh&agrave;
            th&igrave; hoảng hốt thấy chồng trong tư thế treo cổ. Người vợ
            h&ocirc; ho&aacute;n mọi người đến cứu nhưng &ocirc;ng Kiệt
            đ&atilde; tử vong.
          </p>
          <p>
            Theo người nh&agrave;, trước khi xảy ra vụ việc &ocirc;ng Kiệt sinh
            hoạt b&igrave;nh thường, kh&ocirc;ng m&acirc;u thuẫn với ai.
          </p>
          <p>Nguy&ecirc;n nh&acirc;n vụ việc đang được điều tra.</p>
        </div>
      )
    },
    {
      id: 7,
      img:
        'https://znews-photo.zadn.vn/w860/Uploaded/pcwvopbb/2020_01_03/npt.jpg',
      title: 'Thông điệp năm mới của Tổng bí thư Nguyễn Phú Trọng',
      cate: 'Thời sự - Chính trị',
      des:
        'Tổng bí thư, Chủ tịch nước Nguyễn Phú Trọng đã chia sẻ những cảm xúc, suy ngẫm về những công việc mà toàn Đảng phấn đấu.',
      date: '03/01/2019 14:00 AM',
      status: 0,
      writer: 'Vũ Long',
      content: (
        <div>
          <p>
            Tết đến, Xu&acirc;n về đ&uacute;ng v&agrave;o dịp kỷ niệm 90 năm
            Ng&agrave;y th&agrave;nh lập Đảng. Trong kh&ocirc;ng kh&iacute; vui
            mừng phấn khởi của những ng&agrave;y đầu Xu&acirc;n Canh T&yacute;
            2020, Tổng b&iacute; thư, Chủ tịch nước&nbsp;
            <a
              class="topic person autolink"
              title="Tin tức Nguyễn Ph&uacute; Trọng"
              href="https://news.zing.vn/tieu-diem/nguyen-phu-trong.html"
            >
              Nguyễn Ph&uacute; Trọng
            </a>
            &nbsp;đ&atilde; d&agrave;nh thời gian trả lời phỏng vấn của
            Th&ocirc;ng tấn x&atilde; Việt Nam.
          </p>
          <p>
            Tổng b&iacute; thư, Chủ tịch nước Nguyễn Ph&uacute; Trọng đ&atilde;
            chia sẻ những cảm x&uacute;c, suy ngẫm về những c&ocirc;ng việc
            m&agrave; to&agrave;n Đảng, to&agrave;n d&acirc;n v&agrave;
            to&agrave;n qu&acirc;n ta đ&atilde; v&agrave; đang nỗ lực phấn đấu
            để đạt được th&agrave;nh quả như ng&agrave;y h&ocirc;m nay.
          </p>
          <p>
            Hiển hiện trong đ&oacute; l&agrave; tất cả t&acirc;m huyết,
            tr&iacute; tuệ v&agrave; niềm tin, l&agrave; kh&aacute;t vọng vươn
            tới một tương lai rạng rỡ của Đảng, của d&acirc;n tộc, v&igrave; một
            nước Việt Nam h&ograve;a b&igrave;nh, độc lập v&agrave; ph&aacute;t
            triển cường thịnh.
          </p>
          
          <p>
            <em>
              - Trong kh&ocirc;ng kh&iacute; phấn khởi, tự h&agrave;o, cảm
              x&uacute;c đ&oacute;n m&ugrave;a Xu&acirc;n mới cũng l&agrave; dịp
              kỷ niệm 90 năm Ng&agrave;y th&agrave;nh lập&nbsp;
              <a
                class="topic company autolink"
                title="Tin tức Đảng Cộng sản Việt Nam"
                href="https://news.zing.vn/tieu-diem/dang-cong-san-viet-nam.html"
              >
                Đảng Cộng sản Việt Nam
              </a>
              &nbsp;quang vinh, xin Tổng b&iacute; thư, Chủ tịch nước c&oacute;
              thể chia sẻ đ&ocirc;i điều suy ngẫm với bạn đọc?
            </em>
          </p>
          <p>
            <strong>-&nbsp;</strong>Thực tiễn phong ph&uacute; của c&aacute;ch
            mạng Việt Nam từ ng&agrave;y c&oacute; Đảng đến nay đ&atilde; chứng
            minh rằng, sự l&atilde;nh đạo đ&uacute;ng đắn v&agrave; s&aacute;ng
            suốt của Đảng l&agrave; nh&acirc;n tố h&agrave;ng đầu quyết định mọi
            thắng lợi của c&aacute;ch mạng nước ta, l&agrave;m n&ecirc;n nhiều
            kỳ t&iacute;ch tr&ecirc;n đất nước Việt Nam.
          </p>
          <p>
            Ch&iacute;nh trong qu&aacute; tr&igrave;nh l&atilde;nh đạo
            c&aacute;ch mạng, Đảng ta được t&ocirc;i luyện, thử th&aacute;ch
            v&agrave; kh&ocirc;ng ngừng trưởng th&agrave;nh, d&agrave;y dạn kinh
            nghiệm để ng&agrave;y c&agrave;ng xứng đ&aacute;ng với vai
            tr&ograve; v&agrave; sứ mệnh l&atilde;nh đạo c&aacute;ch mạng, xứng
            đ&aacute;ng với sự tin cậy của nh&acirc;n d&acirc;n.
          </p>
        </div>
      )
    },
    {
      id: 8,
      img:
        'https://znews-photo.zadn.vn/w660/Uploaded/fcivbqmv/2020_01_04/Screenshot_1.jpg',
      title: 'Tài xế Grab, Be méo mặt với mức phạt lỗi đeo tai nghe mới',
      cate: 'Công nghệ',
      des:
        'Theo nghị định mới, lỗi đeo tai nghe khi tham gia giao thông đã được tăng mức phạt lên nhiều lần.',
      date: '03/01/2019 18:00 AM',
      status: 0,
      writer: 'Vũ Long',
      content: (
        <div>
          <p>
            Theo luật sư Trần Minh Quang, việc sử dụng tai nghe để nghe nhạc khi
            đang điều khiển xe m&aacute;y l&agrave; vi phạm ph&aacute;p luật
            Việt Nam. Trước đ&acirc;y, lỗi n&agrave;y vi phạm v&agrave;o điểm o,
            khoản 3, Điều 6, Nghị định 46/2016/NĐ-CP. Tuy nhi&ecirc;n, mức phạt
            h&agrave;nh ch&iacute;nh trước đ&acirc;y chỉ từ 100.000-200.000 đồng
            t&ugrave;y theo trường hợp.
          </p>
          <p>
            Sau ng&agrave;y 1/1, lỗi đeo tai nghe khi tham gia giao th&ocirc;ng
            được quy định tại điểm h, khoản 4, điều 6 của nghị định
            100/2019/NĐ-CP. Theo đ&oacute;, người đang điều khiển xe m&aacute;y
            sử dụng &ocirc; (d&ugrave;), điện thoại di động, thiết bị &acirc;m
            thanh, trừ thiết bị trợ th&iacute;nh sẽ bị phạt tiền từ
            600.000-1.000.000 đồng, t&ugrave;y trường hợp.
          </p>
          <table class="picture" align="center">
            <tbody>
              <tr>
                <td class="pic">
                  <img
                    src="https://znews-photo.zadn.vn/w660/Uploaded/fcivbqmv/2020_01_04/146e8b73f4cc16924fdd.jpg"
                    alt="Tai xe Grab, Be 'meo mat' voi muc phat loi deo tai nghe moi hinh anh 1 146e8b73f4cc16924fdd.jpg"
                  />
                </td>
              </tr>
              <tr>
                <td class="pCaption caption">
                  <p>
                    Lỗi đeo tai nghe khi l&aacute;i xe đ&atilde; tăng gấp 6 lần
                    mức phạt so với trước đ&acirc;y.
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
          <p>
            Theo luật sư Minh Quang, khi c&oacute; cuộc gọi tới, người
            d&ugrave;ng c&oacute; thể t&igrave;m chỗ an to&agrave;n, dừng lại
            v&agrave; nghe điện thoại. Việc sử dụng điện thoại khi đang
            l&aacute;i xe, d&ugrave; c&oacute; d&ugrave;ng tai nghe hay
            kh&ocirc;ng, đều khiến người d&ugrave;ng ph&acirc;n t&acirc;m
            v&agrave; dễ g&acirc;y ra tai nạn. Trong khi đ&oacute;, d&ugrave;ng
            tai nghe để nghe nhạc khi điều khiển xe m&aacute;y vừa khiến người
            l&aacute;i kh&ocirc;ng tập trung, vừa kh&ocirc;ng nghe được những
            g&igrave; xảy ra tr&ecirc;n đường.
          </p>
          <p>
            B&ecirc;n cạnh đ&oacute;, nghị định mới cũng đề cập việc người
            c&oacute; h&agrave;nh vi d&ugrave;ng điện thoại di động khi điều
            khiển xe m&aacute;y sẽ bị phạt tiền từ 1-2 triệu đồng.
          </p>
        </div>
      )
    },
    {
      id: 9,
      img:
        'https://znews-photo.zadn.vn/w480/Uploaded/ivpbciv2/2020_01_03/i4.jpg',
      title: 'Dứt áo khiến đối tác bán mình, Apple giờ muốn hợp tác trở lại',
      cate: 'Công nghệ',
      des:
        'Sau 2 năm ngừng hợp tác, Apple đang xem xét lại quyết định tiếp tục hợp tác với hãng từng cung cấp chip đồ họa Imagination.',
      date: '03/01/2019 19:00 AM',
      status: 0,
      writer: 'Vũ Long',
      content: (
        <div>
          <p>
            Cả 2 c&ocirc;ng ty đều đưa ra tuy&ecirc;n bố c&aacute;c thỏa thuận
            hợp đồng đang trong qu&aacute; tr&igrave;nh thương thảo v&agrave;
            chưa ch&iacute;nh thức x&aacute;c nhận c&aacute;c điều khoản.
          </p>
          <p>
            &ldquo;C&aacute;c thỏa thuận l&acirc;u d&agrave;i từng được
            k&yacute; kết v&agrave;o năm 2014 m&agrave; Apple đ&atilde; hủy năm
            2017 sẽ được thay thế lại bằng một số điều khoản sở hữu tr&iacute;
            tuệ kh&aacute;c&rdquo;, th&ocirc;ng c&aacute;o của Imagination cho
            biết.
          </p>
          <table class="picture" align="center">
            <tbody>
              <tr>
                <td class="pic">
                  <img
                    src="https://znews-photo.zadn.vn/w660/Uploaded/ivpbciv2/2020_01_03/1032461217.jpg"
                    alt="Dut ao khien doi tac ban minh, Apple gio muon hop tac tro lai hinh anh 1 1032461217.jpg"
                  />
                </td>
              </tr>
              <tr>
                <td class="pCaption caption">
                  <p>
                    Imagination Technologies từng ăn n&ecirc;n l&agrave;m ra nhờ
                    cung cấp GPU cho Apple, cho đến khi Apple quyết định tự
                    l&agrave;m GPU tr&ecirc;n thế hệ iPhone 2017. Ảnh:&nbsp;
                    <em>Sputnik</em>
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
          <p>
            Theo&nbsp;<em>ZDNet,</em>&nbsp;Apple sẽ phải trả ph&iacute; sở hữu
            tr&iacute; tuệ cho Imagination mỗi khi sử dụng c&ocirc;ng nghệ của
            họ thay v&igrave; được cung cấp c&aacute;c đơn vị xử l&yacute; đồ
            hoạ (GPU) miễn ph&iacute; như thỏa thuận l&uacute;c trước.
          </p>
          <p>
            C&oacute; thể n&oacute;i Apple gần như l&agrave; đối t&aacute;c lớn
            nhất m&agrave; Imagination từng c&oacute;. Theo c&aacute;c
            th&ocirc;ng tin mới nhất, lợi nhuận của Imagination đ&atilde; giảm
            xuống 70%., thấp nhất trong v&ograve;ng 7 năm rưỡi trở lại
            đ&acirc;y. Điều n&agrave;y dẫn đến mức định gi&aacute; doanh nghiệp
            của h&atilde;ng đ&atilde; giảm từ 750 triệu euro xuống khoảng 250
            triệu euro.
          </p>
          <p>
            Imagination Technologies (IT) l&agrave; c&ocirc;ng ty thiết kế chip
            của Anh, chuy&ecirc;n cung cấp bộ vi xử l&yacute; đồ họa PowerVR cho
            iPhone v&agrave; iPad. Tuy nhi&ecirc;n tới năm 2017, Apple đ&atilde;
            quyết định tự ph&aacute;t triển GPU cho chip A11 Bionic, sử dụng
            tr&ecirc;n thế hệ iPhone 2017.
          </p>
        </div>
      )
    },
    {
      id: 10,
      img:
        'https://znews-photo.zadn.vn/w480/Uploaded/ivpbciv2/2019_12_20/11-dieu-can-biet-khi-bi-mat-cap-iphone-2.jpg',
      title: 'Tìm lại được chiếc xe bị mất nhờ iPhone',
      cate: 'Công nghệ',
      des:
        'Một người phụ nữ ở bang Iowa, Mỹ gần đây đã may mắn tìm lại được chiếc xe nhờ vào Find My - tính năng giúp tìm iPhone, iPad, MacBook.',
      date: '04/01/2019 10:00 AM',
      status: 0,
      writer: 'Minh Long',
      content: (
        <div>
          <p>
            O&rsquo;Conner đ&atilde; để qu&ecirc;n chiếc iPhone
            tr&ecirc;n&nbsp;xe hơi c&aacute; nh&acirc;n khi đang mua đồ tại một
            cửa h&agrave;ng tiện lợi địa phương. V&igrave; mải tập trung
            v&agrave;o việc mua sắm m&agrave; c&ocirc; c&ograve;n qu&ecirc;n
            r&uacute;t cả chiếc ch&igrave;a kh&oacute;a tr&ecirc;n xe.
            Kh&ocirc;ng kh&oacute; hiểu khi sau đ&oacute;, chiếc xe c&ugrave;ng
            với iPhone v&agrave; tư trang c&aacute; nh&acirc;n của
            O&rsquo;Conner đ&atilde; ho&agrave;n to&agrave;n biến mất.
          </p>
          <table class="picture" align="center">
            <tbody>
              <tr>
                <td class="pic">
                  <img
                    src="https://znews-photo.zadn.vn/w660/Uploaded/ivpbciv2/2019_12_20/xU44EPgXTdaC7AVLRXGD3D.jpg"
                    alt="Tim duoc chiec xe bi an cap nho iPhone hinh anh 1 xU44EPgXTdaC7AVLRXGD3D.jpg"
                  />
                </td>
              </tr>
              <tr>
                <td class="pCaption caption">
                  Find My - t&iacute;nh năng gi&uacute;p t&igrave;m iPhone,
                  iPad, MacBook khi bị thất lạc.&nbsp;c&oacute; thể hoạt động
                  m&agrave; kh&ocirc;ng cần tới Internet. Ảnh:&nbsp;Tom's Guide.
                </td>
              </tr>
            </tbody>
          </table>
          <p>
            Mọi chuyện c&agrave;ng tồi tệ hơn v&igrave; mới chỉ c&aacute;ch
            đ&acirc;y khoảng 3 th&aacute;ng, căn hộ của O&rsquo;Conner đ&atilde;
            ho&agrave;n to&agrave;n bị thi&ecirc;u rụi. Vụ việc đ&atilde; khiến
            O&rsquo;Conner bất đắc dĩ phải sinh hoạt v&agrave; ăn ngủ tr&ecirc;n
            chiếc xe của m&igrave;nh trong v&agrave;i tuần gần đ&acirc;y.
          </p>
          <p>
            May mắn thay, nhờ v&agrave;o t&iacute;nh năng t&igrave;m kiếm vị
            tr&iacute; của chiếc iPhone vẫn đang bật, ch&iacute;nh quyền địa
            phương đ&atilde; t&igrave;m được chiếc xe của O&rsquo;Conner tại một
            khu chung cư. Tuy nhi&ecirc;n, c&ocirc; vẫn chưa lấy lại được
            iPhone, v&iacute; v&agrave; c&aacute;c vật dụng tư trang
            kh&aacute;c.
          </p>
         
        </div>
      )
    },

    {
      id: 11,
      img:
        'https://znews-photo.zadn.vn/w480/Uploaded/neg_wpeczyr/2019_12_20/maxresdefault.jpg',
      title: 'Mua Apple Watch nào rẻ nhất dùng được eSIM tại Việt Nam?',
      cate: 'Công nghệ',
      des:
        'Những mẫu Apple Watch Series 3 (bản GPS + Cellular) trở lên mới có thể dùng được eSIM tại Việt Nam.',
      date: '04/01/2019 14:00 AM',
      status: 0,
      writer: 'Minh Long',
      content: (
        <div>
          <p>
            Ng&agrave;y 13/12, Viettel ra mắt dịch vụ eSIM tr&ecirc;n đồng hồ
            th&ocirc;ng minh Apple&nbsp;Watch, cho ph&eacute;p thiết bị
            c&oacute; thể kết nối mạng di động tại Việt Nam.
          </p>
          <p>
            Như vậy người d&ugrave;ng c&oacute; thể kết nối trực tiếp với mạng
            viễn th&ocirc;ng từ&nbsp;thiết bị m&agrave; kh&ocirc;ng cần qua
            Bluetooth tr&ecirc;n&nbsp;
            <a
              class="topic company autolink"
              title="Tin tức iPhone"
              href="https://news.zing.vn/tieu-diem/iphone.html"
            >
              iPhone
            </a>
            &nbsp;như trước. Điều đ&oacute; đồng nghĩa với việc bạn c&oacute;
            thể nhận được c&aacute;c cuộc gọi, sử dụng bản đồ ngay
            tr&ecirc;n&nbsp;
            <a
              class="topic company autolink"
              title="Tin tức Apple"
              href="https://news.zing.vn/tieu-diem/cong-ty-apple.html"
            >
              Apple
            </a>
            &nbsp;Watch m&agrave; kh&ocirc;ng cần đến iPhone.
          </p>
          <p>
            Để c&oacute; thể sử dụng được eSIM, thiết bị của người d&ugrave;ng
            cần đảm bảo một số điều kiện như Apple Watch Series 3 hoặc hơn (bản
            GPS + Cellular), chạy tr&ecirc;n nền tảng watchOS phi&ecirc;n bản
            6.1.1 trở l&ecirc;n. Apple Watch phải hỗ trợ một trong số c&aacute;c
            băng tần mạng 900 MHz, 1.800 MHz, 2.100 MHz, 2.600 MHz.
          </p>
          <table class="picture" align="center">
            <tbody>
              <tr>
                <td class="pic">
                  <img
                    src="https://znews-photo.zadn.vn/w660/Uploaded/neg_wpeczyr/2019_12_20/The-Top-5-Apple-Watch-Apps-at-Work-1024x538.jpg"
                    alt="Mua Apple Watch nao re nhat dung duoc eSIM tai Viet Nam? hinh anh 1 The-Top-5-Apple-Watch-Apps-at-Work-1024x538.jpg"
                  />
                </td>
              </tr>
              <tr>
                <td class="pCaption caption">
                  <p>
                    Viettel đ&atilde; hỗ trợ eSIM tr&ecirc;n Apple Watch. Ảnh:
                    <em>&nbsp;Digital Trends</em>.
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
          <p>
            Hiện tại, nếu bạn&nbsp;muốn mua Apple Watch d&ugrave;ng được
            t&iacute;nh năng eSIM c&oacute; thể tham khảo một số lựa chọn sau
            đ&acirc;y. Đầu ti&ecirc;n, với những sản phẩm ch&iacute;nh
            h&atilde;ng, Apple Watch Series 3 LTE đang được ch&agrave;o
            b&aacute;n với gi&aacute; từ 8,5 triệu đồng, Apple Watch Series 4
            LTE gi&aacute; từ 9,9 triệu đồng v&agrave; Apple Watch Series 5 LTE
            14 triệu đồng.
          </p>
          <p>
            Apple Watch d&ugrave;ng được eSIM tại Việt Nam l&agrave; phi&ecirc;n
            bản quốc tế. Tuy nhi&ecirc;n, nh&agrave; mạng Viettel kh&ocirc;ng hỗ
            trợ c&aacute;c model x&aacute;ch tay từ Mỹ, Canada. Thế n&ecirc;n
            người d&ugrave;ng c&oacute; thể chọn mua những sản phẩm x&aacute;ch
            tay từ Singapore, Nhật Bản, Hong Kong.
          </p>
         
        </div>
      )
    }
  ]
};

function PostReducer(state = dataPost, action) {
  switch (action.type) {
    case ACCEPT:
      return {
        ...state,
        isLogin: true,
        username: action.username
      };
    default:
      return state;
  }
}

export default PostReducer;
