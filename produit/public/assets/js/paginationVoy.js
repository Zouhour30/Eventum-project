let jsp_current_page1 = 1;
const jsp_records_per_page1 = 4;

let object = [
    { json_item: "<tr>\n" +
            "                                            <td class=\"py-1\">\n" +
            "                                                <img src=\"../../assets/images/faces-clipart/pic-1.png\" alt=\"image\" />\n" +
            "                                            </td>\n" +
            "                                            <td> zouhour </td>\n" +
            "                                            <td>\n" +
            "                                                <div class=\"progress\">\n" +
            "                                                    <div class=\"progress-bar bg-success\" role=\"progressbar\" style=\"width: 25%\" aria-valuenow=\"25\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n" +
            "                                                </div>\n" +
            "                                            </td>\n" +
            "                                                                                          <td> May 15, 2015 </td>  " +
            "                                                                                         <td><label class=\"badge badge-danger\"> <i class=\"mdi mdi-delete\"></i></label><label class=\"badge badge-info\"><i class=\"mdi mdi-table-edit\"></i></label><label class=\"badge badge-warning\"><i class=\"mdi mdi-information-outline\"></i></label></td>\n\n" +
            "                                        </tr>"},
    { json_item: "<tr>\n" +
            "                                            <td class=\"py-1\">\n" +
            "                                                <img src=\"../../assets/images/faces-clipart/pic-1.png\" alt=\"image\" />\n" +
            "                                            </td>\n" +
            "                                            <td> asma </td>\n" +
            "                                            <td>\n" +
            "                                                <div class=\"progress\">\n" +
            "                                                    <div class=\"progress-bar bg-success\" role=\"progressbar\" style=\"width: 25%\" aria-valuenow=\"25\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n" +
            "                                                </div>\n" +
            "                                            </td>\n" +
            "                                                                                          <td> May 15, 2015 </td>  " +
            "                                                                                         <td><label class=\"badge badge-danger\"> <i class=\"mdi mdi-delete\"></i></label><label class=\"badge badge-info\"><i class=\"mdi mdi-table-edit\"></i></label><label class=\"badge badge-warning\"><i class=\"mdi mdi-information-outline\"></i></label></td>\n\n" +
            "                                        </tr>"},
    { json_item: "<tr>\n" +
            "                                            <td class=\"py-1\">\n" +
            "                                                <img src=\"../../assets/images/faces-clipart/pic-1.png\" alt=\"image\" />\n" +
            "                                            </td>\n" +
            "                                            <td> aziz </td>\n" +
            "                                            <td>\n" +
            "                                                <div class=\"progress\">\n" +
            "                                                    <div class=\"progress-bar bg-info\" role=\"progressbar\" style=\"width: 65%\" aria-valuenow=\"65\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n" +
            "                                                </div>\n" +
            "                                            </td>\n" +
            "                                                                                          <td> May 15, 2015 </td>  " +
            "                                                                                         <td><label class=\"badge badge-danger\"> <i class=\"mdi mdi-delete\"></i></label><label class=\"badge badge-info\"><i class=\"mdi mdi-table-edit\"></i></label><label class=\"badge badge-warning\"><i class=\"mdi mdi-information-outline\"></i></label></td>\n\n" +
            "                                        </tr>"},
    { json_item: "<tr>\n" +
            "                                            <td class=\"py-1\">\n" +
            "                                                <img src=\"../../assets/images/faces-clipart/pic-1.png\" alt=\"image\" />\n" +
            "                                            </td>\n" +
            "                                            <td> islem</td>\n" +
            "                                            <td>\n" +
            "                                                <div class=\"progress\">\n" +
            "                                                    <div class=\"progress-bar bg-success\" role=\"progressbar\" style=\"width: 25%\" aria-valuenow=\"25\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n" +
            "                                                </div>\n" +
            "                                            </td>\n" +
            "                                                                                          <td> May 15, 2015 </td>  " +
            "                                                                                         <td><label class=\"badge badge-danger\"> <i class=\"mdi mdi-delete\"></i></label><label class=\"badge badge-info\"><i class=\"mdi mdi-table-edit\"></i></label><label class=\"badge badge-warning\"><i class=\"mdi mdi-information-outline\"></i></label></td>\n\n" +
            "                                        </tr>"},
    { json_item:"<tr>\n" +
            "                                            <td class=\"py-1\">\n" +
            "                                                <img src=\"../../assets/images/faces-clipart/pic-1.png\" alt=\"image\" />\n" +
            "                                            </td>\n" +
            "                                            <td> gadour </td>\n" +
            "                                            <td>\n" +
            "                                                <div class=\"progress\">\n" +
            "                                                    <div class=\"progress-bar bg-success\" role=\"progressbar\" style=\"width: 25%\" aria-valuenow=\"25\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n" +
            "                                                </div>\n" +
            "                                            </td>\n" +
            "                                                                                          <td> May 15, 2015 </td>  " +
            "                                                                                         <td><label class=\"badge badge-danger\"> <i class=\"mdi mdi-delete\"></i></label><label class=\"badge badge-info\"><i class=\"mdi mdi-table-edit\"></i></label><label class=\"badge badge-warning\"><i class=\"mdi mdi-information-outline\"></i></label></td>\n\n" +
            "                                        </tr>"},
    { json_item: "<tr>\n" +
            "                                            <td class=\"py-1\">\n" +
            "                                                <img src=\"../../assets/images/faces-clipart/pic-1.png\" alt=\"image\" />\n" +
            "                                            </td>\n" +
            "                                            <td> youssef </td>\n" +
            "                                            <td>\n" +
            "                                                <div class=\"progress\">\n" +
            "                                                    <div class=\"progress-bar bg-success\" role=\"progressbar\" style=\"width: 25%\" aria-valuenow=\"25\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n" +
            "                                                </div>\n" +
            "                                            </td>\n" +
            "                                                                                          <td> May 15, 2015 </td>  " +
            "                                                                                         <td><label class=\"badge badge-danger\"> <i class=\"mdi mdi-delete\"></i></label><label class=\"badge badge-info\"><i class=\"mdi mdi-table-edit\"></i></label><label class=\"badge badge-warning\"><i class=\"mdi mdi-information-outline\"></i></label></td>\n\n" +
            "                                        </tr>"},
    { json_item: "<tr>\n" +
            "                                            <td class=\"py-1\">\n" +
            "                                                <img src=\"../../assets/images/faces-clipart/pic-1.png\" alt=\"image\" />\n" +
            "                                            </td>\n" +
            "                                            <td> Herman Beck </td>\n" +
            "                                            <td>\n" +
            "                                                <div class=\"progress\">\n" +
            "                                                    <div class=\"progress-bar bg-success\" role=\"progressbar\" style=\"width: 25%\" aria-valuenow=\"25\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n" +
            "                                                </div>\n" +
            "                                            </td>\n" +
            "                                                                                          <td> May 15, 2015 </td>  " +
            "                                                                                         <td><label class=\"badge badge-danger\"> <i class=\"mdi mdi-delete\"></i></label><label class=\"badge badge-info\"><i class=\"mdi mdi-table-edit\"></i></label><label class=\"badge badge-warning\"><i class=\"mdi mdi-information-outline\"></i></label></td>\n\n" +
            "                                        </tr>"},
    { json_item: "<tr>\n" +
            "                                            <td class=\"py-1\">\n" +
            "                                                <img src=\"../../assets/images/faces-clipart/pic-1.png\" alt=\"image\" />\n" +
            "                                            </td>\n" +
            "                                            <td> Herman Beck </td>\n" +
            "                                            <td>\n" +
            "                                                <div class=\"progress\">\n" +
            "                                                    <div class=\"progress-bar bg-warning\" role=\"progressbar\" style=\"width: 90%\" aria-valuenow=\"90\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n" +
            "                                                </div>\n" +
            "                                            </td>\n" +
            "                                                                                          <td> May 15, 2015 </td>  " +
            "                                                                                         <td><label class=\"badge badge-danger\"> <i class=\"mdi mdi-delete\"></i></label><label class=\"badge badge-info\"><i class=\"mdi mdi-table-edit\"></i></label><label class=\"badge badge-warning\"><i class=\"mdi mdi-information-outline\"></i></label></td>\n\n" +
            "                                        </tr>"},
    { json_item:"<tr>\n" +
            "                                            <td class=\"py-1\">\n" +
            "                                                <img src=\"../../assets/images/faces-clipart/pic-1.png\" alt=\"image\" />\n" +
            "                                            </td>\n" +
            "                                            <td> Herman Beck </td>\n" +
            "                                            <td>\n" +
            "                                                <div class=\"progress\">\n" +
            "                                                       <div class=\"progress-bar bg-danger\" role=\"progressbar\" style=\"width: 75%\" aria-valuenow=\"75\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n" +
            "                                                </div>\n" +
            "                                            </td>\n" +
            "                                                                                          <td> May 15, 2015 </td>  " +
            "                                                                                         <td><label class=\"badge badge-danger\"> <i class=\"mdi mdi-delete\"></i></label><label class=\"badge badge-info\"><i class=\"mdi mdi-table-edit\"></i></label><label class=\"badge badge-warning\"><i class=\"mdi mdi-information-outline\"></i></label></td>\n\n" +
            "                                        </tr>"},
    { json_item: "<tr>\n" +
            "                                            <td class=\"py-1\">\n" +
            "                                                <img src=\"../../assets/images/faces-clipart/pic-1.png\" alt=\"image\" />\n" +
            "                                            </td>\n" +
            "                                            <td> Herman Beck </td>\n" +
            "                                            <td>\n" +
            "                                                <div class=\"progress\">\n" +
            "                                                    <div class=\"progress-bar bg-success\" role=\"progressbar\" style=\"width: 25%\" aria-valuenow=\"25\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n" +
            "                                                </div>\n" +
            "                                            </td>\n" +
            "                                                                                          <td> May 15, 2015 </td>  " +
            "                                                                                         <td><label class=\"badge badge-danger\"> <i class=\"mdi mdi-delete\"></i></label><label class=\"badge badge-info\"><i class=\"mdi mdi-table-edit\"></i></label><label class=\"badge badge-warning\"><i class=\"mdi mdi-information-outline\"></i></label></td>\n\n" +
            "                                        </tr>"},
    { json_item: "<tr>\n" +
            "                                            <td class=\"py-1\">\n" +
            "                                                <img src=\"../../assets/images/faces-clipart/pic-1.png\" alt=\"image\" />\n" +
            "                                            </td>\n" +
            "                                            <td> Herman Beck </td>\n" +
            "                                            <td>\n" +
            "                                                <div class=\"progress\">\n" +
            "                                                    <div class=\"progress-bar bg-success\" role=\"progressbar\" style=\"width: 25%\" aria-valuenow=\"25\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n" +
            "                                                </div>\n" +
            "                                            </td>\n" +
            "                                                                                          <td> May 15, 2015 </td>  " +
            "                                                                                         <td><label class=\"badge badge-danger\"> <i class=\"mdi mdi-delete\"></i></label><label class=\"badge badge-info\"><i class=\"mdi mdi-table-edit\"></i></label><label class=\"badge badge-warning\"><i class=\"mdi mdi-information-outline\"></i></label></td>\n\n" +
            "                                        </tr>"},
    { json_item:"<tr>\n" +
            "                                            <td class=\"py-1\">\n" +
            "                                                <img src=\"../../assets/images/faces-clipart/pic-1.png\" alt=\"image\" />\n" +
            "                                            </td>\n" +
            "                                            <td> Herman Beck </td>\n" +
            "                                            <td>\n" +
            "                                                <div class=\"progress\">\n" +
            "                                                    <div class=\"progress-bar bg-success\" role=\"progressbar\" style=\"width: 25%\" aria-valuenow=\"25\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n" +
            "                                                </div>\n" +
            "                                            </td>\n" +
            "                                                                                          <td> May 15, 2015 </td>  " +
            "                                                                                         <td><label class=\"badge badge-danger\"> <i class=\"mdi mdi-delete\"></i></label><label class=\"badge badge-info\"><i class=\"mdi mdi-table-edit\"></i></label><label class=\"badge badge-warning\"><i class=\"mdi mdi-information-outline\"></i></label></td>\n\n" +
            "                                        </tr>"},
    { json_item: "<tr>\n" +
            "                                            <td class=\"py-1\">\n" +
            "                                                <img src=\"../../assets/images/faces-clipart/pic-1.png\" alt=\"image\" />\n" +
            "                                            </td>\n" +
            "                                            <td> Herman Beck </td>\n" +
            "                                            <td>\n" +
            "                                                <div class=\"progress\">\n" +
            "                                                    <div class=\"progress-bar bg-success\" role=\"progressbar\" style=\"width: 25%\" aria-valuenow=\"25\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n" +
            "                                                </div>\n" +
            "                                            </td>\n" +
            "                                                                                          <td> May 15, 2015 </td>  " +
            "                                                                                         <td><label class=\"badge badge-danger\"> <i class=\"mdi mdi-delete\"></i></label><label class=\"badge badge-info\"><i class=\"mdi mdi-table-edit\"></i></label><label class=\"badge badge-warning\"><i class=\"mdi mdi-information-outline\"></i></label></td>\n\n" +
            "                                        </tr>"},

];

function jsp_num_pages1() {
    return Math.ceil(object.length / jsp_records_per_page1);
}

function jsp_prev_page1() {
    if (jsp_current_page1> 1) {
        jsp_current_page1--;
        jsp_change_page1(jsp_current_page1);
    }
}

function jsp_next_page1() {
    if (jsp_current_page1 < jsp_num_pages1()) {
        jsp_current_page1++;
        jsp_change_page1(jsp_current_page1);
    }
}

function jsp_change_page1(page1) {
    const btn_prev1 = document.getElementById('btn-prev1');
    const btn_next1 = document.getElementById('btn-next1');
    const listing_table1 = document.getElementById('listing-table1');
    let page_span1 = document.getElementById('page1');

    if (page1 < 1) {
        page1 = 1;
    }
    if (page1 > jsp_num_pages1()) {
        page1 = jsp_num_pages1();
    }

    listing_table1.innerHTML = '';

    for (let i = (page1 - 1) * jsp_records_per_page1; i < (page1 * jsp_records_per_page1) && i < object.length; i++) {
        listing_table1.innerHTML += `${object[i].json_item}<br>`;
    }
    page_span1.innerHTML = `${page1}/${jsp_num_pages1()}`;

    btn_prev1.style.display = (page1 === 1) ? 'none' : 'inline-block';
    btn_next1.style.display = (page1 === jsp_num_pages1()) ? 'none' : 'inline-block';
}

window.onload = () => {
    document.getElementById('btn-prev1').addEventListener('click', (o) => {
        o.preventDefault();
        jsp_prev_page1();
    });

    document.getElementById('btn-next1').addEventListener('click', (o) => {
        o.preventDefault();
        jsp_next_page1();
    });

    jsp_change_page1(1);
};