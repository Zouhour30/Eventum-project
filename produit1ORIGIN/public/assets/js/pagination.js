let jsp_current_page = 1;
const jsp_records_per_page = 4;

let jsp_json_object = [
    { json_item: "<tr>\n" +
            "                                            <td>asma</td>\n" +
            "                                            <td>Photoshop</td>\n" +
            "                                            <td class=\"text-danger\"> 28.76% <i class=\"mdi mdi-arrow-down\"></i></td>\n" +
            "                                            <td><label class=\"badge badge-danger\"> <i class=\"mdi mdi-delete\"></i></label><label class=\"badge badge-info\"><i class=\"mdi mdi-table-edit\"></i></label><label class=\"badge badge-warning\"><i class=\"mdi mdi-information-outline\"></i></label></td>\n" +
            "                                        </tr>"},
    { json_item: "<tr>\n" +
            "                                            <td>hayet</td>\n" +
            "                                            <td>Photoshop</td>\n" +
            "                                            <td class=\"text-danger\"> 28.76% <i class=\"mdi mdi-arrow-down\"></i></td>\n" +
            "                                            <td><label class=\"badge badge-danger\"> <i class=\"mdi mdi-delete\"></i></label><label class=\"badge badge-info\"><i class=\"mdi mdi-table-edit\"></i></label><label class=\"badge badge-warning\"><i class=\"mdi mdi-information-outline\"></i></label></td>\n" +
            "                                        </tr>"},
    { json_item: " <tr>\n" +
            "                                            <td>Peter</td>\n" +
            "                                            <td>After effects</td>\n" +
            "                                            <td class=\"text-success\"> 82.00% <i class=\"mdi mdi-arrow-up\"></i></td>\n" +
            "                                            <td><label class=\"badge badge-danger\"> <i class=\"mdi mdi-delete\"></i></label><label class=\"badge badge-info\"><i class=\"mdi mdi-table-edit\"></i></label><label class=\"badge badge-warning\"><i class=\"mdi mdi-information-outline\"></i></label></td>\n" +
            "                                        </tr>"},
    { json_item: "<tr>\n" +
            "                                            <td>safa</td>\n" +
            "                                            <td>Photoshop</td>\n" +
            "                                            <td class=\"text-danger\"> 28.76% <i class=\"mdi mdi-arrow-down\"></i></td>\n" +
            "                                            <td><label class=\"badge badge-danger\"> <i class=\"mdi mdi-delete\"></i></label><label class=\"badge badge-info\"><i class=\"mdi mdi-table-edit\"></i></label><label class=\"badge badge-warning\"><i class=\"mdi mdi-information-outline\"></i></label></td>\n" +
            "                                        </tr>"},
    { json_item: "<tr>\n" +
            "                                            <td>soumaya</td>\n" +
            "                                            <td>Photoshop</td>\n" +
            "                                            <td class=\"text-danger\"> 28.76% <i class=\"mdi mdi-arrow-down\"></i></td>\n" +
            "                                            <td><label class=\"badge badge-danger\"> <i class=\"mdi mdi-delete\"></i></label><label class=\"badge badge-info\"><i class=\"mdi mdi-table-edit\"></i></label><label class=\"badge badge-warning\"><i class=\"mdi mdi-information-outline\"></i></label></td>\n" +
            "                                        </tr>"},
    { json_item: "<tr>\n" +
            "                                            <td>zouhour</td>\n" +
            "                                            <td>Photoshop</td>\n" +
            "                                            <td class=\"text-danger\"> 28.76% <i class=\"mdi mdi-arrow-down\"></i></td>\n" +
            "                                            <td><label class=\"badge badge-danger\"> <i class=\"mdi mdi-delete\"></i></label><label class=\"badge badge-info\"><i class=\"mdi mdi-table-edit\"></i></label><label class=\"badge badge-warning\"><i class=\"mdi mdi-information-outline\"></i></label></td>\n" +
            "                                        </tr>"},
    { json_item: " <tr>\n" +
            "                                            <td>Peter</td>\n" +
            "                                            <td>After effects</td>\n" +
            "                                            <td class=\"text-success\"> 82.00% <i class=\"mdi mdi-arrow-up\"></i></td>\n" +
            "                                            <td><label class=\"badge badge-danger\"> <i class=\"mdi mdi-delete\"></i></label><label class=\"badge badge-info\"><i class=\"mdi mdi-table-edit\"></i></label><label class=\"badge badge-warning\"><i class=\"mdi mdi-information-outline\"></i></label></td>\n" +
            "                                        </tr>"},
    { json_item: "<tr>\n" +
            "                                            <td>aziz</td>\n" +
            "                                            <td>Photoshop</td>\n" +
            "                                            <td class=\"text-danger\"> 28.76% <i class=\"mdi mdi-arrow-down\"></i></td>\n" +
            "                                            <td><label class=\"badge badge-danger\"> <i class=\"mdi mdi-delete\"></i></label><label class=\"badge badge-info\"><i class=\"mdi mdi-table-edit\"></i></label><label class=\"badge badge-warning\"><i class=\"mdi mdi-information-outline\"></i></label></td>\n" +
            "                                        </tr>"},
    { json_item: "<tr>\n" +
            "                                            <td>islem</td>\n" +
            "                                            <td>Photoshop</td>\n" +
            "                                            <td class=\"text-danger\"> 28.76% <i class=\"mdi mdi-arrow-down\"></i></td>\n" +
            "                                            <td><label class=\"badge badge-danger\"> <i class=\"mdi mdi-delete\"></i></label><label class=\"badge badge-info\"><i class=\"mdi mdi-table-edit\"></i></label><label class=\"badge badge-warning\"><i class=\"mdi mdi-information-outline\"></i></label></td>\n" +
            "                                        </tr>"},
    { json_item: "<tr>\n" +
            "                                            <td>gadour</td>\n" +
            "                                            <td>Photoshop</td>\n" +
            "                                            <td class=\"text-danger\"> 28.76% <i class=\"mdi mdi-arrow-down\"></i></td>\n" +
            "                                            <td><label class=\"badge badge-danger\"> <i class=\"mdi mdi-delete\"></i></label><label class=\"badge badge-info\"><i class=\"mdi mdi-table-edit\"></i></label><label class=\"badge badge-warning\"><i class=\"mdi mdi-information-outline\"></i></label></td>\n" +
            "                                        </tr>"},
    { json_item: " <tr>\n" +
            "                                            <td>Peter</td>\n" +
            "                                            <td>After effects</td>\n" +
            "                                            <td class=\"text-success\"> 82.00% <i class=\"mdi mdi-arrow-up\"></i></td>\n" +
            "                                            <td><label class=\"badge badge-danger\"> <i class=\"mdi mdi-delete\"></i></label><label class=\"badge badge-info\"><i class=\"mdi mdi-table-edit\"></i></label><label class=\"badge badge-warning\"><i class=\"mdi mdi-information-outline\"></i></label></td>\n" +
            "                                        </tr>"},
    { json_item: "<tr>\n" +
            "                                            <td>youssef</td>\n" +
            "                                            <td>Photoshop</td>\n" +
            "                                            <td class=\"text-danger\"> 28.76% <i class=\"mdi mdi-arrow-down\"></i></td>\n" +
            "                                            <td><label class=\"badge badge-danger\"> <i class=\"mdi mdi-delete\"></i></label><label class=\"badge badge-info\"><i class=\"mdi mdi-table-edit\"></i></label><label class=\"badge badge-warning\"><i class=\"mdi mdi-information-outline\"></i></label></td>\n" +
            "                                        </tr>"},
    { json_item: "<tr>\n" +
            "                                            <td>hiba</td>\n" +
            "                                            <td>Photoshop</td>\n" +
            "                                            <td class=\"text-danger\"> 28.76% <i class=\"mdi mdi-arrow-down\"></i></td>\n" +
            "                                            <td><label class=\"badge badge-danger\"> <i class=\"mdi mdi-delete\"></i></label><label class=\"badge badge-info\"><i class=\"mdi mdi-table-edit\"></i></label><label class=\"badge badge-warning\"><i class=\"mdi mdi-information-outline\"></i></label></td>\n" +
            "                                        </tr>"},
    { json_item: " <tr>\n" +
            "                                            <td>Peter</td>\n" +
            "                                            <td>After effects</td>\n" +
            "                                            <td class=\"text-success\"> 82.00% <i class=\"mdi mdi-arrow-up\"></i></td>\n" +
            "                                            <td><label class=\"badge badge-danger\"> <i class=\"mdi mdi-delete\"></i></label><label class=\"badge badge-info\"><i class=\"mdi mdi-table-edit\"></i></label><label class=\"badge badge-warning\"><i class=\"mdi mdi-information-outline\"></i></label></td>\n" +
            "                                        </tr>"},
    { json_item: "<tr>\n" +
            "                                            <td>emna</td>\n" +
            "                                            <td>Photoshop</td>\n" +
            "                                            <td class=\"text-danger\"> 28.76% <i class=\"mdi mdi-arrow-down\"></i></td>\n" +
            "                                            <td><label class=\"badge badge-danger\"> <i class=\"mdi mdi-delete\"></i></label><label class=\"badge badge-info\"><i class=\"mdi mdi-table-edit\"></i></label><label class=\"badge badge-warning\"><i class=\"mdi mdi-information-outline\"></i></label></td>\n" +
            "                                        </tr>"},
    { json_item: "<tr>\n" +
            "                                            <td>nour</td>\n" +
            "                                            <td>Photoshop</td>\n" +
            "                                            <td class=\"text-danger\"> 28.76% <i class=\"mdi mdi-arrow-down\"></i></td>\n" +
            "                                            <td><label class=\"badge badge-danger\"> <i class=\"mdi mdi-delete\"></i></label><label class=\"badge badge-info\"><i class=\"mdi mdi-table-edit\"></i></label><label class=\"badge badge-warning\"><i class=\"mdi mdi-information-outline\"></i></label></td>\n" +
            "                                        </tr>"},
    { json_item: "<tr>\n" +
            "                                            <td>jihen</td>\n" +
            "                                            <td>Photoshop</td>\n" +
            "                                            <td class=\"text-danger\"> 28.76% <i class=\"mdi mdi-arrow-down\"></i></td>\n" +
            "                                            <td><label class=\"badge badge-danger\"> <i class=\"mdi mdi-delete\"></i></label><label class=\"badge badge-info\"><i class=\"mdi mdi-table-edit\"></i></label><label class=\"badge badge-warning\"><i class=\"mdi mdi-information-outline\"></i></label></td>\n" +
            "                                        </tr>"},
    { json_item: "<tr>\n" +
            "                                            <td>Jacob</td>\n" +
            "                                            <td>Photoshop</td>\n" +
            "                                            <td class=\"text-danger\"> 28.76% <i class=\"mdi mdi-arrow-down\"></i></td>\n" +
            "                                            <td><label class=\"badge badge-danger\"> <i class=\"mdi mdi-delete\"></i></label><label class=\"badge badge-info\"><i class=\"mdi mdi-table-edit\"></i></label><label class=\"badge badge-warning\"><i class=\"mdi mdi-information-outline\"></i></label></td>\n" +
            "                                        </tr>"},
    { json_item: "<tr>\n" +
            "                                            <td>Jacob</td>\n" +
            "                                            <td>Photoshop</td>\n" +
            "                                            <td class=\"text-danger\"> 28.76% <i class=\"mdi mdi-arrow-down\"></i></td>\n" +
            "                                            <td><label class=\"badge badge-danger\"> <i class=\"mdi mdi-delete\"></i></label><label class=\"badge badge-info\"><i class=\"mdi mdi-table-edit\"></i></label><label class=\"badge badge-warning\"><i class=\"mdi mdi-information-outline\"></i></label></td>\n" +
            "                                        </tr>"},
    { json_item: "<tr>\n" +
            "                                            <td>Jacob</td>\n" +
            "                                            <td>Photoshop</td>\n" +
            "                                            <td class=\"text-danger\"> 28.76% <i class=\"mdi mdi-arrow-down\"></i></td>\n" +
            "                                            <td><label class=\"badge badge-danger\"> <i class=\"mdi mdi-delete\"></i></label><label class=\"badge badge-info\"><i class=\"mdi mdi-table-edit\"></i></label><label class=\"badge badge-warning\"><i class=\"mdi mdi-information-outline\"></i></label></td>\n" +
            "                                        </tr>"},
    { json_item: "<tr>\n" +
            "                                            <td>Jacob</td>\n" +
            "                                            <td>Photoshop</td>\n" +
            "                                            <td class=\"text-danger\"> 28.76% <i class=\"mdi mdi-arrow-down\"></i></td>\n" +
            "                                            <td><label class=\"badge badge-danger\"> <i class=\"mdi mdi-delete\"></i></label><label class=\"badge badge-info\"><i class=\"mdi mdi-table-edit\"></i></label><label class=\"badge badge-warning\"><i class=\"mdi mdi-information-outline\"></i></label></td>\n" +
            "                                        </tr>"},
    { json_item: "<tr>\n" +
            "                                            <td>Jacob</td>\n" +
            "                                            <td>Photoshop</td>\n" +
            "                                            <td class=\"text-danger\"> 28.76% <i class=\"mdi mdi-arrow-down\"></i></td>\n" +
            "                                            <td><label class=\"badge badge-danger\"> <i class=\"mdi mdi-delete\"></i></label><label class=\"badge badge-info\"><i class=\"mdi mdi-table-edit\"></i></label><label class=\"badge badge-warning\"><i class=\"mdi mdi-information-outline\"></i></label></td>\n" +
            "                                        </tr>"},
    { json_item: "<tr>\n" +
            "                                            <td>Jacob</td>\n" +
            "                                            <td>Photoshop</td>\n" +
            "                                            <td class=\"text-danger\"> 28.76% <i class=\"mdi mdi-arrow-down\"></i></td>\n" +
            "                                            <td><label class=\"badge badge-danger\"> <i class=\"mdi mdi-delete\"></i></label><label class=\"badge badge-info\"><i class=\"mdi mdi-table-edit\"></i></label><label class=\"badge badge-warning\"><i class=\"mdi mdi-information-outline\"></i></label></td>\n" +
            "                                        </tr>"},
];

function jsp_num_pages() {
    return Math.ceil(jsp_json_object.length / jsp_records_per_page);
}

function jsp_prev_page() {
    if (jsp_current_page > 1) {
        jsp_current_page--;
        jsp_change_page(jsp_current_page);
    }
}

function jsp_next_page() {
    if (jsp_current_page < jsp_num_pages()) {
        jsp_current_page++;
        jsp_change_page(jsp_current_page);
    }
}

function jsp_change_page(page) {
    const btn_prev = document.getElementById('btn-prev');
    const btn_next = document.getElementById('btn-next');
    const listing_table = document.getElementById('listing-table');
    let page_span = document.getElementById('page');

    if (page < 1) {
        page = 1;
    }
    if (page > jsp_num_pages()) {
        page = jsp_num_pages();
    }

    listing_table.innerHTML = '';

    for (let i = (page - 1) * jsp_records_per_page; i < (page * jsp_records_per_page) && i < jsp_json_object.length; i++) {
        listing_table.innerHTML += `${jsp_json_object[i].json_item}<br>`;
    }
    page_span.innerHTML = `${page}/${jsp_num_pages()}`;

    btn_prev.style.display = (page === 1) ? 'none' : 'inline-block';
    btn_next.style.display = (page === jsp_num_pages()) ? 'none' : 'inline-block';
}

window.onload = () => {
    document.getElementById('btn-prev').addEventListener('click', (e) => {
        e.preventDefault();
        jsp_prev_page();
    });

    document.getElementById('btn-next').addEventListener('click', (e) => {
        e.preventDefault();
        jsp_next_page();
    });

    jsp_change_page(1);
};