const headerContent = `<nav>
                            <ul class="flex justify-between">
                                <li><a href="./test_page.html">WOMAN</a></li>
                                <li><a href="#">MEN</a></li>
                                <li><a class="active_page" href="./index.html">ALL</a></li>
                            </ul>
                        </nav>
                        <div class="logo">
                            <p>your<span>sneaker</span></p>
                        </div>
                        <div class="user_menu flex justify-between">
                            <img src="./img/header/user.svg" alt="there are user profile or data" />
                            <img src="./img/header/search.svg" alt="there are search" />
                            <img src="./img/header/cart.svg" alt="this is a cart" />
                        </div>
`

const headerContainer = document.querySelector(".js_header_container");

headerContainer.innerHTML = headerContent;