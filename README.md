
# Xây dựng website khóa học tích hợp  (machine learning) chatbot (business module) + web rtc + hệ thống code 
+ 4000 5000 dòng dữ liệu
+ React ( front-end): giao diện clone pluralsight
+ Nodejs (back-end): webrtc
+ Database: MongoDB123
+ Ui/ux: Huy ->
+ App: react-native
Craw data



> Chức năng: 
Đăng nhập , đăng ký, đăng xuất
Phân quyền  (admin, teacher, student)
+ admin : thêm, sửa, xóa, quản lí tài khoản, duyệt tài khoản teacher, thông báo, quản lí tài khoản teacher và student
+ teacher: đăng khóa học, thêm, sửa, xóa, tạo phòng stream,thông báo, quản lí tài khoản
+ student: mua khóa học, tìm kiếm , đánh giá, bình luận ,học, vào phòng stream, tương tác với chatbot, thông báo, giỏ hàng
Thanh toán (thanh toán cho khóa học của học viên) (paypal+banking), quản lí tài khoản, làm bài test, nhận chứng chỉ khóa học


> Use git for new branch:
+ git remote
+ git fetch origin master
+ git branch ```your branch```
+ git checkout ```your branch```
+ git branch //check branchs in repo
+ git switch ```your branch```
+ git add ```add your files```
+ git commit -a -m "mess" -n //option: n for find your conflict
+ git push origin ```your branch```
+ link: https://www.atlassian.com/git/tutorials/syncing

> Use for SSH key
+ On your termianl ```ssh keygen```
+ ```ssh-agent sh -c 'ssh-add; ssh-add -L'```
+ Go to github or gitlab, change directory to SSH : upload your ssh key
+ Done!!!

- front-end version 2
    - NextJS with typeScript, redux
    - sass, MaterialUI, formik, yup, notistack
    - husky, tslint

tslint -config:
    - function complexity less then 10 
    - no call console - log - error
    - bank line before return
    - no semicolon
    - quotemark -- single
    - no using else
    - no async without await
    - max line length 130
    - tab indent 2
    - no consecutive blank lines
    - using comma in the last item
    - no export default
    - using return early patterns
    - no implicit dependencies ( callBack, memo, effect )

- run command: npm run tslint or yarn tslint before commit!

- file tree: 
ex: page:
        + logic: 
                * actions.ts
                * reducers.ts
                * api.ts
        * type:
                * index.ts 
                (...)
        * components: (...).tsx
        * index.page.tsx

- styles
-- use 'background' instead of 'background-color'

----- 
example change