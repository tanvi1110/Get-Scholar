import { useEffect, useState } from 'react'

const dropdownNavs = [
    {
        label: "Scholarships", navs: [
            {
                title: "National",
                desc: "Provided to indian citizens",
                path: "javascript:void(0)",
                icon: <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path  d="M5 1.25C5.41421 1.25 5.75 1.58579 5.75 2V3.08515L7.32358 2.77043C9.11678 2.41179 10.9756 2.58245 12.6735 3.26161L13.0868 3.42693C14.3652 3.93832 15.7724 4.03382 17.1082 3.69986C18.3875 3.38005 19.4147 4.76652 18.7363 5.89719L17.4578 8.02808C17.0814 8.65542 17.021 8.78483 17.0056 8.90275C16.9972 8.96731 16.9972 9.03269 17.0056 9.09725C17.021 9.21517 17.0814 9.34458 17.4578 9.97192L19.0184 12.573C19.5884 13.5229 19.0787 14.7534 18.004 15.0221L17.9039 15.0471C15.9814 15.5277 13.9563 15.3903 12.1164 14.6543C10.6886 14.0832 9.12562 13.9397 7.61776 14.2413L5.75 14.6149V22C5.75 22.4142 5.41421 22.75 5 22.75C4.58579 22.75 4.25 22.4142 4.25 22V2C4.25 1.58579 4.58579 1.25 5 1.25ZM5.75 13.0851L7.32358 12.7704C9.11678 12.4118 10.9756 12.5825 12.6735 13.2616C14.2206 13.8805 15.9235 13.996 17.5401 13.5919L17.6402 13.5669C17.7377 13.5425 17.7839 13.4309 17.7322 13.3447L16.1716 10.7437C16.1517 10.7106 16.132 10.6779 16.1125 10.6455C15.8295 10.1756 15.5796 9.76055 15.5183 9.29176C15.493 9.09808 15.493 8.90192 15.5183 8.70824C15.5796 8.23946 15.8295 7.82441 16.1125 7.35454C16.132 7.32208 16.1517 7.28936 16.1716 7.25634L17.4254 5.16658C15.7976 5.56324 14.0861 5.4422 12.5297 4.81964L12.1164 4.65433C10.6886 4.08323 9.12562 3.93973 7.61776 4.2413L5.75 4.61485V13.0851Z" />
                </svg>
                ,
            },
            {
                title: "International",
                desc: "Provided for abroad studies",
                path: "javascript:void(0)",
                icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path  d="M18.375 2.25c-1.035 0-1.875.84-1.875 1.875v15.75c0 1.035.84 1.875 1.875 1.875h.75c1.035 0 1.875-.84 1.875-1.875V4.125c0-1.036-.84-1.875-1.875-1.875h-.75zM9.75 8.625c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-.75a1.875 1.875 0 01-1.875-1.875V8.625zM3 13.125c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v6.75c0 1.035-.84 1.875-1.875 1.875h-.75A1.875 1.875 0 013 19.875v-6.75z" />
                </svg>

                ,
            },
        ]
    },
   
]

export const Navbar = () => {

    const [state, setState] = useState(false)
    const [drapdownState, setDrapdownState] = useState({ isActive: false, idx: null })

    // Replace javascript:void(0) paths with your paths
    const navigation = [
        { title: "Scholarships", path: "javascript:void(0)", isDrapdown: true, navs: dropdownNavs },
        { title: "Schemes", path: "javascript:void(0)", isDrapdown: false },
        { title: "Latest Blog", path: "javascript:void(0)", isDrapdown: false },
        { title: "About", path: "javascript:void(0)", isDrapdown: false }
    ]

    useEffect(() => {
        document.onclick = (e) => {
            const target = e.target;
            if (!target.closest(".nav-menu")) setDrapdownState({ isActive: false, idx: null });
        };
    }, [])

    return (
        <>
            <nav className={`relative z-20 bg-white w-full md:static md:text-sm md:border-none ${state ? "shadow-lg rounded-b-xl md:shadow-none" : ""}`}>
                <div className="items-center gap-x-14 px-4 max-w-screen-xl mx-auto md:flex md:px-8">
                    <div className="flex items-center justify-between py-3 md:py-5 md:block">
                        <a href="">
                            <img
                                src='https://img.lovepik.com/free-png/20210923/lovepik-cartoon-boy-bachelor-graduation-png-image_401288223_wh1200.png'
                                width={60}
                                height={30}
                                alt="Float UI logo"
                            />
                        </a>
                        <div className="md:hidden">
                            <button className="text-gray-500 hover:text-gray-800"
                                onClick={() => setState(!state)}
                            >
                                {
                                    state ? (
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                        </svg>
                                    ) : (
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                            <path fillRule="evenodd" d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm8.25 5.25a.75.75 0 01.75-.75h8.25a.75.75 0 010 1.5H12a.75.75 0 01-.75-.75z" clipRule="evenodd" />
                                        </svg>

                                    )
                                }
                            </button>
                        </div>
                    </div>
                    <div className={`nav-menu flex-1 pb-3 mt-8 md:block md:pb-0 md:mt-0 ${state ? 'block' : 'hidden'}`}>
                        <ul className="items-center space-y-6 md:flex md:space-x-6 md:space-y-0">
                            {
                                navigation.map((item, idx) => {
                                    return (
                                        <li key={idx}>
                                            {
                                                item.isDrapdown ? (
                                                    <button className="w-full flex items-center justify-between gap-1 text-gray-700 hover:text-indigo-600"
                                                        onClick={() => setDrapdownState({ idx, isActive: !drapdownState.isActive })}
                                                    >
                                                        {item.title}
                                                        {
                                                            drapdownState.idx == idx && drapdownState.isActive ? (
                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                                                    <path fillRule="evenodd" d="M14.77 12.79a.75.75 0 01-1.06-.02L10 8.832 6.29 12.77a.75.75 0 11-1.08-1.04l4.25-4.5a.75.75 0 011.08 0l4.25 4.5a.75.75 0 01-.02 1.06z" clipRule="evenodd" />
                                                                </svg>

                                                            ) : (
                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                                                    <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                                                                </svg>
                                                            )
                                                        }
                                                    </button>
                                                ) : (
                                                    <a href={item.path} className="block text-gray-700 hover:text-indigo-600">
                                                        {item.title}
                                                    </a>
                                                )
                                            }
                                            {
                                                item.isDrapdown && drapdownState.idx == idx && drapdownState.isActive ? (
                                                    <div className="mt-6 inset-x-0 top-20 w-full md:absolute md:border-y md:shadow-md md:mt-0">
                                                        <ul className='max-w-screen-xl mx-auto grid items-center gap-6 md:p-8 md:grid-cols-2 lg:grid-cols-3'>
                                                            {item?.navs.map((dropdownItem, idx) => (
                                                                <li key={idx}>
                                                                    <p className="text-indigo-600 text-sm">{dropdownItem.label}</p>
                                                                    <ul className='mt-5 space-y-6'>
                                                                        {dropdownItem.navs.map((navItem, idx) => (
                                                                            <li key={idx} className="group">
                                                                                <a href={navItem.path} className='flex gap-3 items-center'>
                                                                                    <div className='w-12 h-12 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center duration-150 group-hover:bg-indigo-600 group-hover:text-white md:w-14 md:h-14'>
                                                                                        {navItem.icon}
                                                                                    </div>
                                                                                    <div>
                                                                                        <span className="text-gray-800 duration-200 group-hover:text-indigo-600 text-sm font-medium md:text-base">{navItem.title}</span>
                                                                                        <p className='text-sm text-gray-600 group-hover:text-gray-800 mt-1'>{navItem.desc}</p>
                                                                                    </div>
                                                                                </a>
                                                                            </li>
                                                                        ))}
                                                                    </ul>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                ) : ""
                                            }
                                        </li>
                                    )
                                })
                            }
                            <div className='flex-1 items-center justify-end gap-x-6 space-y-3 md:flex md:space-y-0'>
                                <li>
                                    <a href="javascript:void(0)" className="block py-3 text-center text-gray-700 hover:text-indigo-600 border rounded-lg md:border-none">
                                        Log in
                                    </a>
                                </li>
                                <li>
                                    <a href="javascript:void(0)" className="block py-3 px-4 font-medium text-center text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 active:shadow-none rounded-lg shadow md:inline">
                                        Sign in
                                    </a>
                                </li>
                            </div>
                        </ul>
                    </div>
                </div>
            </nav>
            {
                state ? (
                    <div
                        className="z-10 fixed top-0 w-screen h-screen bg-black/20 backdrop-blur-sm md:hidden"
                        onClick={() => setState(false)}></div>
                ) : ""
            }
        </>
    )
}