import React from 'react'
import { GoChevronRight } from "react-icons/go";

const CoursePagination = () => {
    return (
        <>
            <div className='coursepagination'>
                <ul className="page-numbers">
                    <li><span aria-current="page" className="page-numbers current">1</span></li>
                    <li><a className="page-numbers" href="https://wordpress.iqonic.design/product/wp/socialv/courses/?paged=2">2</a></li>
                    <li><a className="page-numbers" href="https://wordpress.iqonic.design/product/wp/socialv/courses/?paged=3">3</a></li>
                    <li><a className="next page-numbers" href="https://wordpress.iqonic.design/product/wp/socialv/courses/?paged=2">
                        <GoChevronRight />
                    </a>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default CoursePagination