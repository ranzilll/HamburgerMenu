document.addEventListener('DOMContentLoaded', () => {
    // Create a reusable function to generate submenu
    function createSubmenu(containerId, optClass, submenuHTML) {
        const submenuContainer = document.getElementById(containerId);

        // Show submenu on mouseenter
        document.querySelector(optClass).addEventListener('mouseenter', () => {
            submenuContainer.innerHTML = ''; // Clear any previous submenu content
            submenuContainer.innerHTML = submenuHTML;
            submenuContainer.style.display = 'block'; // Show submenu
        });

        // Hide submenu on mouseleave
        document.querySelector(optClass).addEventListener('mouseleave', () => {
            submenuContainer.style.display = 'none'; // Hide submenu
        });

        // Keep submenu visible when mouse is over it
        submenuContainer.addEventListener('mouseenter', () => {
            submenuContainer.style.display = 'block';
        });

        // Hide submenu when mouse leaves it
        submenuContainer.addEventListener('mouseleave', () => {
            submenuContainer.style.display = 'none';
        });
    }

    // Submenu content for each option
    const submenuContent = [
        {
            containerId: 'submenu-container',
            optClass: '.opt1',
            submenuHTML: `
            <div class="submenu">

            <div class="submenuA">
                <div class="lifeins abc">Life Insurance</div>
                <div class="sublifeins xyz">
                    <li>All Life Insurance Products</li>
                    <li>Advised Life Cover</li>
                    <li>Direct Life Insurance</li>
                    <li>Diabetes Life Cover</li>
                    <li>Whole of Life</li>
                </div>
            </div>

            <div class="submenuB">
                <div class="Illness abc">Illness and Income Protection.</div>
                <div class="subillness xyz">
                    <li>Critical Illness Cover</li>
                    <li>Life or critical Illness cover</li>
                    <li>Income Protetction</li>
                    <li>Fund Range</li>
                </div>
            </div>

            <div class="submenuC">
                <div class="InsCust abc">Insurance Customers.</div>
                <div class="subinstCust xyz">
                    <li>Make a Claim</li>
                    <li>Manage your insurance policy</li>
                </div>
            </div>

           <div class="submenuD">
                <div class="InsGd abc">Insurance Customers.</div>
                <div class="subinsgd xyz">
                    <li>What is life insurance?</li>
                    <li>Type of life insurance</li>
                    <li>Insurance guides</li>
                </div>
            </div>
           
        </div>
     </div>  
                <hr id="linebrk"></hr>
            `
        },
        {
            containerId: 'submenu-container2',
            optClass: '.opt2',
            submenuHTML: `
             <div class="submenu">

            <div class="submenuA">
                <div class="lifeins abc">Life Insurance</div>
                <div class="sublifeins xyz">
                    <li>All Life Insurance Products</li>
                    <li>Advised Life Cover</li>
                    <li>Direct Life Insurance</li>
                    <li>Diabetes Life Cover</li>
                    <li>Whole of Life</li>
                </div>
            </div>

            <div class="submenuB">
                <div class="Illness abc">Illness and Income Protection.</div>
                <div class="subillness xyz">
                    <li>Critical Illness Cover</li>
                    <li>Life or critical Illness cover</li>
                    <li>Income Protetction</li>
                    <li>Fund Range</li>
                </div>
            </div>

            <div class="submenuC">
                <div class="InsCust abc">Insurance Customers.</div>
                <div class="subinstCust xyz">
                    <li>Make a Claim</li>
                    <li>Manage your insurance policy</li>
                </div>
            </div>

           <div class="submenuD">
                <div class="InsGd abc">Insurance Customers.</div>
                <div class="subinsgd xyz">
                    <li>What is life insurance?</li>
                    <li>Type of life insurance</li>
                    <li>Insurance guides</li>
                    <li>Diabetes Life Cover</li>
                    <li>Whole of Life</li>
                </div>
            </div>
           
         </div>
    </div> 
                <hr id="linebrk"></hr>
            `
        },
        {
            containerId: 'submenu-container3',
            optClass: '.opt3',
            submenuHTML: `
             <div class="submenu">

            <div class="submenuA">
                <div class="lifeins abc">Life Insurance</div>
                <div class="sublifeins xyz">
                    <li>All Life Insurance Products</li>
                    <li>Advised Life Cover</li>
                    <li>Direct Life Insurance</li>
                    <li>Diabetes Life Cover</li>
                    <li>Whole of Life</li>
                </div>
            </div>

            <div class="submenuB">
                <div class="Illness abc">Illness and Income Protection.</div>
                <div class="subillness xyz">
                    <li>Critical Illness Cover</li>
                    <li>Life or critical Illness cover</li>
                    <li>Income Protetction</li>
                    <li>Fund Range</li>
                    <li>Diabetes Life Cover</li>
                    <li>Whole of Life</li>
                </div>
            </div>

            <div class="submenuC">
                <div class="InsCust abc">Insurance Customers.</div>
                <div class="subinstCust xyz">
                    <li>Make a Claim</li>
                    <li>Manage your insurance policy</li>
                </div>
            </div>

           <div class="submenuD">
                <div class="InsGd abc">Insurance Customers.</div>
                <div class="subinsgd xyz">
                    <li>What is life insurance?</li>
                    <li>Type of life insurance</li>
                    <li>Insurance guides</li>
                </div>
            </div>
           
        </div>
    </div>  
                <hr id="linebrk"></hr>
            `
        },
        {
            containerId: 'submenu-container4',
            optClass: '.opt4',
            submenuHTML: `
                  <div class="submenu">

            <div class="submenuA">
                <div class="lifeins abc">Life Insurance</div>
                <div class="sublifeins xyz">
                    <li>All Life Insurance Products</li>
                    <li>Advised Life Cover</li>
                    <li>Direct Life Insurance</li>
                    <li>Diabetes Life Cover</li>
                    <li>Whole of Life</li>
                </div>
            </div>

            <div class="submenuB">
                <div class="Illness abc">Illness and Income Protection.</div>
                <div class="subillness xyz">
                    <li>Critical Illness Cover</li>
                    <li>Life or critical Illness cover</li>
                    <li>Income Protetction</li>
                    <li>Fund Range</li>
                </div>
            </div>

            <div class="submenuC">
                <div class="InsCust abc">Insurance Customers.</div>
                <div class="subinstCust xyz">
                    <li>Make a Claim</li>
                    <li>Manage your insurance policy</li>
                </div>
            </div>

           <div class="submenuD">
                <div class="InsGd abc">Insurance Customers.</div>
                <div class="subinsgd xyz">
                    <li>What is life insurance?</li>
                    <li>Type of life insurance</li>
                    <li>Insurance guides</li>
                </div>
            </div>
           
        </div>
    </div>  
                <hr id="linebrk"></hr>
            `
        },
        {
            containerId: 'submenu-container5',
            optClass: '.opt5',
            submenuHTML: `
             <div class="submenu">

            <div class="submenuA">
                <div class="lifeins abc">Life Insurance</div>
                <div class="sublifeins xyz">
                    <li>All Life Insurance Products</li>
                    <li>Advised Life Cover</li>
                    <li>Direct Life Insurance</li>
                    <li>Diabetes Life Cover</li>
                    <li>Whole of Life</li>
                </div>
            </div>

            <div class="submenuB">
                <div class="Illness abc">Illness and Income Protection.</div>
                <div class="subillness xyz">
                    <li>Critical Illness Cover</li>
                    <li>Life or critical Illness cover</li>
                    <li>Income Protetction</li>
                    <li>Fund Range</li>
                </div>
            </div>

            <div class="submenuC">
                <div class="InsCust abc">Insurance Customers.</div>
                <div class="subinstCust xyz">
                    <li>Make a Claim</li>
                    <li>Manage your insurance policy</li>
                </div>
            </div>

           <div class="submenuD">
                <div class="InsGd abc">Insurance Customers.</div>
                <div class="subinsgd xyz">
                    <li>What is life insurance?</li>
                    <li>Type of life insurance</li>
                    <li>Insurance guides</li>
                </div>
            </div>
           
        </div>
    </div> 
                <hr id="linebrk"></hr>
            `
        },
        {
            containerId: 'submenu-container6',
            optClass: '.opt6',
            submenuHTML: `
                 <div class="submenu">

            <div class="submenuA">
                <div class="lifeins abc">Life Insurance</div>
                <div class="sublifeins xyz">
                    <li>All Life Insurance Products</li>
                    <li>Advised Life Cover</li>
                    <li>Direct Life Insurance</li>
                    <li>Diabetes Life Cover</li>
                    <li>Whole of Life</li>
                </div>
            </div>

            <div class="submenuB">
                <div class="Illness abc">Illness and Income Protection.</div>
                <div class="subillness xyz">
                    <li>Critical Illness Cover</li>
                    <li>Life or critical Illness cover</li>
                    <li>Income Protetction</li>
                    <li>Fund Range</li>
                </div>
            </div>

            <div class="submenuC">
                <div class="InsCust abc">Insurance Customers.</div>
                <div class="subinstCust xyz">
                    <li>Make a Claim</li>
                    <li>Manage your insurance policy</li>
                </div>
            </div>

           <div class="submenuD">
                <div class="InsGd abc">Insurance Customers.</div>
                <div class="subinsgd xyz">
                    <li>What is life insurance?</li>
                    <li>Type of life insurance</li>
                    <li>Insurance guides</li>
                </div>
            </div>
           
        </div>
     </div> 
                <hr id="linebrk"></hr>
            `
        }
    ];

    // Generate submenus for each option
    submenuContent.forEach((submenu) => {
        createSubmenu(submenu.containerId, submenu.optClass, submenu.submenuHTML);
    });
});

// hamburger and cross logic 
document.querySelector('.hamburger').addEventListener('click', showSidebar);
document.querySelector('.cross').addEventListener('click', hideSidebar);
function showSidebar(){
    const sidebar = document.querySelector('.sideCclass');
    console.log(sidebar);
    sidebar.style.display = 'block';

    const hambg = document.querySelector('.hamburger');
    hambg.style.display = 'none';

    const cross = document.querySelector('.cross');
    cross.style.display = 'block';
}

function hideSidebar(){
    const cross = document.querySelector('.cross');
    cross.style.display = 'none';

    const sidebar = document.querySelector('.sideCclass');
    console.log(sidebar);
    sidebar.style.display = 'none';

    const hambg = document.querySelector('.hamburger');
    hambg.style.display = 'block';
}

// end of hamburger and cross logic 

// insurance logic 
document.querySelector('.sideinsdropdwn').addEventListener('click', showsubmenu);
function showsubmenu(){
    const subm = document.querySelector('.sideinssumenu');
    subm.style.display = 'block'

    const dwn = document.querySelector('.sideinsdropdwn');
    dwn.style.display = 'none';

    const up = document.querySelector('.sideinsdropdup');
    up.style.display = 'block';
}

document.querySelector('.sideinsdropdup').addEventListener('click', hideubmenu);
function hideubmenu(){
    const up = document.querySelector('.sideinsdropdup');
    up.style.display = 'none';

    const dwn = document.querySelector('.sideinsdropdwn');
    dwn.style.display = 'block';

    const subm = document.querySelector('.sideinssumenu');
    subm.style.display = 'none';
}

document.querySelector('.sideinsdropdwn1a').addEventListener('click', showlifeins);
function showlifeins(){
    const showlifeins = document.querySelector('.lifeinscontent');
    showlifeins.style.display = 'block';

    const sideinsdropdwn = document.querySelector('.sideinsdropdwn1a');
    sideinsdropdwn.style.display = 'none';

    const hideins = document.querySelector('.sideinsdropdup1b');
    hideins.style.display = 'block';
}

document.querySelector('.sideinsdropdup1b').addEventListener('click', hideins);
function hideins(){
    const showlifeins = document.querySelector('.lifeinscontent');
    showlifeins.style.display = 'none';

    const sideinsdropdwn = document.querySelector('.sideinsdropdwn1a');
    sideinsdropdwn.style.display = 'block';

    const hideins = document.querySelector('.sideinsdropdup1b');
    hideins.style.display = 'none';
}

document.querySelector('.sideilldropdown').addEventListener('click', showillandinc);
function showillandinc(){
    const showlifeins = document.querySelector('.illincscontent');
    showlifeins.style.display = 'block';

    const sideinsdropdwn = document.querySelector('.sideilldropdown');
    sideinsdropdwn.style.display = 'none';

    const hideins = document.querySelector('.sideilldropup');
    hideins.style.display = 'block';
}
document.querySelector('.sideilldropup').addEventListener('click', hideillandinc);
function hideillandinc(){
    const showlifeins = document.querySelector('.illincscontent');
    showlifeins.style.display = 'none';

    const sideinsdropdwn = document.querySelector('.sideilldropdown');
    sideinsdropdwn.style.display = 'block';

    const hideins = document.querySelector('.sideilldropup');
    hideins.style.display = 'none';
}
document.querySelector('.sidecstdropdown').addEventListener('click', showinscust);
function showinscust(){
    const showlifeins = document.querySelector('.inscust');
    showlifeins.style.display = 'block';

    const sideinsdropdwn = document.querySelector('.sidecstdropdown');
    sideinsdropdwn.style.display = 'none';

    const hideins = document.querySelector('.sidecstdropup');
    hideins.style.display = 'block';
}
document.querySelector('.sidecstdropup').addEventListener('click', hideinscust);
function hideinscust(){
    const showlifeins = document.querySelector('.inscust');
    showlifeins.style.display = 'none';

    const sideinsdropdwn = document.querySelector('.sidecstdropdown');
    sideinsdropdwn.style.display = 'block';

    const hideins = document.querySelector('.sidecstdropup');
    hideins.style.display = 'none';
}

// end of insurance logic 

// pension logic 

document.querySelector('.sidependropdwn').addEventListener('click', showsubmenu2);
function showsubmenu2(){
    const showlifeins = document.querySelector('.sidepenmenu');
    showlifeins.style.display = 'block';

    const sideinsdropdwn = document.querySelector('.sidependropdwn');
    sideinsdropdwn.style.display = 'none';

    const hideins = document.querySelector('.sidependropdup');
    hideins.style.display = 'block';
}

document.querySelector('.sidependropdup').addEventListener('click', hideubmenu2);
function hideubmenu2(){
    const showlifeins = document.querySelector('.sidepenmenu');
    showlifeins.style.display = 'none';

    const sideinsdropdwn = document.querySelector('.sidependropdwn');
    sideinsdropdwn.style.display = 'block';

    const hideins = document.querySelector('.sidependropdup');
    hideins.style.display = 'none';
}

document.querySelector('.sideourpensdwn').addEventListener('click', showourpens);
function showourpens(){
    const showlifeins = document.querySelector('.pens');
    showlifeins.style.display = 'block';

    const sideinsdropdwn = document.querySelector('.sideourpensdwn');
    sideinsdropdwn.style.display = 'none';

    const hideins = document.querySelector('.sidepensup');
    hideins.style.display = 'block';
}

document.querySelector('.sidepensup').addEventListener('click', hideourpens);
function hideourpens(){
    const showlifeins = document.querySelector('.pens');
    showlifeins.style.display = 'none';

    const sideinsdropdwn = document.querySelector('.sideourpensdwn');
    sideinsdropdwn.style.display = 'block';

    const hideins = document.querySelector('.sidepensup');
    hideins.style.display = 'none';
}
document.querySelector('.sideinvdown').addEventListener('click', showourinv);
function showourinv(){
    const showlifeins = document.querySelector('.inv');
    showlifeins.style.display = 'block';

    const sideinsdropdwn = document.querySelector('.sideinvdown');
    sideinsdropdwn.style.display = 'none';

    const hideins = document.querySelector('.sideinvup');
    hideins.style.display = 'block';
}

document.querySelector('.sideinvup').addEventListener('click', hideourinv);
function hideourinv(){
    const showlifeins = document.querySelector('.inv');
    showlifeins.style.display = 'none';

    const sideinsdropdwn = document.querySelector('.sideinvdown');
    sideinsdropdwn.style.display = 'block';

    const hideins = document.querySelector('.sideinvup');
    hideins.style.display = 'none';
}

// end of pension logic 

// retirement planning logic 

document.querySelector('.sideretdwn').addEventListener('click', showsubmenu3);
function showsubmenu3(){
    const showlifeins = document.querySelector('.sideretmenu');
    showlifeins.style.display = 'block';

    const sideinsdropdwn = document.querySelector('.sideretdwn');
    sideinsdropdwn.style.display = 'none';

    const hideins = document.querySelector('.sideretup');
    hideins.style.display = 'block';
}

document.querySelector('.sideretup').addEventListener('click', hideubmenu3);
function hideubmenu3(){
    const showlifeins = document.querySelector('.sideretmenu');
    showlifeins.style.display = 'none';

    const sideinsdropdwn = document.querySelector('.sideretdwn');
    sideinsdropdwn.style.display = 'block';

    const hideins = document.querySelector('.sideretup');
    hideins.style.display = 'none';
}

document.querySelector('.sideret1dwn').addEventListener('click', showyourpens);
function showyourpens(){
    const showlifeins = document.querySelector('.uyp');
    showlifeins.style.display = 'block';

    const sideinsdropdwn = document.querySelector('.sideret1dwn');
    sideinsdropdwn.style.display = 'none';

    const hideins = document.querySelector('.sideret1up');
    hideins.style.display = 'block';
}

document.querySelector('.sideret1up').addEventListener('click', hideyourpens);
function hideyourpens(){
    const showlifeins = document.querySelector('.uyp');
    showlifeins.style.display = 'none';

    const sideinsdropdwn = document.querySelector('.sideret1dwn');
    sideinsdropdwn.style.display = 'block';

    const hideins = document.querySelector('.sideret1up');
    hideins.style.display = 'none';
}

document.querySelector('.sideretoldwn').addEventListener('click', showretols);
function showretols(){
    const showlifeins = document.querySelector('.rt');
    showlifeins.style.display = 'block';

    const sideinsdropdwn = document.querySelector('.sideretoldwn');
    sideinsdropdwn.style.display = 'none';

    const hideins = document.querySelector('.sideretolup');
    hideins.style.display = 'block';
}

document.querySelector('.sideretolup').addEventListener('click', hideretols);
function hideretols(){
    const showlifeins = document.querySelector('.rt');
    showlifeins.style.display = 'none';

    const sideinsdropdwn = document.querySelector('.sideretoldwn');
    sideinsdropdwn.style.display = 'block';

    const hideins = document.querySelector('.sideretolup');
    hideins.style.display = 'none';
}