function MyButton() {

    return (
        <button className="btn btn-primary">I am a button</button>
    );
}


function MyHeader() {
    return (
    <>
        <header class="p-3 mb-3 border-bottom">
            <div class="container">
                <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                    {
                        /*
                        <a href="/" class="d-flex align-items-center mb-2 mb-lg-0 link-body-emphasis text-decoration-none">
                            <svg class="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap">
                                <use xlink:href="#bootstrap"></use>
                            </svg>
                        </a>    
                        */
                    }

                    <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                        <li>
                            <span href="#" class="nav-link px-2 link-secondary">Overview</span>
                        </li>
                        <li>
                            <span href="#" class="nav-link px-2 link-body-emphasis">Inventory</span>
                        </li>
                        <li>
                            <span href="#" class="nav-link px-2 link-body-emphasis">Customers</span>
                        </li>
                        <li>
                            <span href="#" class="nav-link px-2 link-body-emphasis">Products</span>
                        </li>
                    </ul>
                    
                    {
                        /*
                        <form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
                            <input type="search" class="form-control" placeholder="Search..." aria-label="Search"></input>
                        </form>
                        */
                    }

                    <div class="dropdown text-end">
                        <span href="#" class="d-block link-body-emphasis text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                            { /*<img src="https://github.com/mdo.png" alt="mdo" width="32" height="32" class="rounded-circle"> </img>*/ }
                        </span>
                        <ul class="dropdown-menu text-small">
                            <li>
                                <span class="dropdown-item" href="#">New project...</span>
                            </li>
                            <li>
                                <span class="dropdown-item" href="#">Settings</span>
                            </li>
                            <li>
                                <span class="dropdown-item" href="#">Profile</span>
                            </li>
                            <li>
                                { /*<hr class="dropdown-divider">*/ }
                            </li>
                            <li>
                                <span class="dropdown-item" href="#">Sign out</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    </>
    );

}



export default function MyContentpanel() {
    return (
        <>
        <div className="container">
            <MyHeader />
            <MyButton />
        </div>
        </>
    );
};