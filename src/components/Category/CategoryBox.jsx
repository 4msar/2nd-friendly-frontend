import React from 'react'

const CategoryBox = ({icon, title, subtitle, url}) => {
  return (
    <div class="col-sm-6 col-lg-4 col-xl-4">
        <div class="card card-body shadow rounded-3">
            <div class="d-flex align-items-center">
                <div class="icon-lg bg-warning bg-opacity-15 rounded-circle text-warning"><i class={icon}></i></div>
                <div class="ms-3">
                    <h5 class="mb-0"><a href={url} class="stretched-link">{title}</a></h5>
                    <span>{subtitle}</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CategoryBox