window.addEventListener('load',()=>{
    let _flag = document.querySelector('.lang img');
    let _naNum = document.getElementById('na-num');
    let _btnNab = document.getElementsByClassName('btn-nav');
    let _mainNav = document.querySelector('#header nav');
    let _header = document.getElementById('header');

    // 국기변경 함수
    let changFlag = ()=>{
        let naCode = _naNum.value;
        _flag.setAttribute('src',`./images/flag_${naCode}.svg`);
        _flag.setAttribute('alt',naCode);
    }
    // 내비게이션 보이기감추기 함수
    let showNav = ()=>{
        if(_btnNab[0].getAttribute('data-role')==1){
            // 보이기
            _mainNav.style.left='0';
            _mainNav.style.right='0';
            _btnNab[0].setAttribute('data-role','0');
        }else{
            //안보이기
            _mainNav.style.left='100%';
            _mainNav.style.right='-100%';
            _btnNab[0].setAttribute('data-role','1');
        }
    }    
    // 헤더 반응 이벤트
    let showHeader = ()=>{
        let scrollY = document.documentElement.scrollTop;
        if(scrollY>=500){
            _header.style.position='fixed';
            _header.style.background='#fff';
        }else{
            _header.style.position='absolute';
            _header.style.background='transparent';
        };
    }
})