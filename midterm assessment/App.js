let csSubjectsData = [];
let GradeList = [];
$(document).ready(function() {
    $.getJSON("./cs-subject.json",
        data => {
            var csSubjectArr = data.curriculum[0].subjects;
            var groupNameArr = csSubjectArr.map(item => {
                return item.groupName
            })

            csSubjectsData = csSubjectArr;
            renderGroupSubject(groupNameArr);
        });


    $('#groupSelect').change(() => {
        var selectedGroup = $('#groupSelect').val();
        let subjects = []

        csSubjectsData.forEach(data => {
            if (data.groupName === selectedGroup) {
                subjects = data.subjects
            }
        });

        let subjectNames = subjects.map(subject => {
            return subject.name
        });

        updateSubject(subjectNames);
    });

    $('#addbtn').click(() => {
        let year = $('#yearSelect').val();
        let semester = $('#semesterSelect').val();
        let groupSubject = $('#groupSelect').val();
        let isShow = false
        let alertString = `Have unselected field!, please fulfill the selector`;
        if (year === null) {
            alertString = alertString + `\n- year`;
            isShow = true
        }
        if (semester === null) {
            alertString = alertString + `\n- data`;
            isShow = true
        }
        if (groupSubject === null) {
            alertString = alertString + `\n- groupSubject`
            isShow = true
        }

        if (isShow) {
            alert(alertString);
        }


    });

    // $('#groupSelect').val("Language Courses");

    let grade_selector = $('.grade-select')
    console.log(grade_selector)
    $(document).on('change', ".grade-select", function(e) {
        alert($(this).val())
        console.log(e)
    });
    // grade_selector.change(() => {
    //    alert();
    // });


})


function renderGroupSubject(groupNameArr) {
    groupNameArr.forEach(element => {
        $('#groupSelect').append(
            `<option value="${element}">${element}</option>`
        );
    });
}

function updateSubject(subjectNames) {
    $('#subjectSelect').html('');
    subjectNames.forEach(element => {
        $('#subjectSelect').append(
            `<option value="${element}">${element}</option>`
        );
    })
}

function addItemInCardList() {

}

function createCardList() {
    ` <div class="container-fluid mx-0 px-0 pb-5" style = "background-color: white; border-bottom-left-radius:4px; border-bottom-right-radius:4px;">
    <div class="row mx-0 px-0 " style="background-color: red;">
        <div class="col-10">
            <p1>Semester 1/2019</p1>
        </div>
        <div class="col" style="text-align: left;">
            <p1>GPA:</p1>
            <p1>3.75</p1>
        </div>
        
    </div>
</div>`
}

function saveValue() {

}

function renderCourseTable() {

}

function renderGradeGraph() {
    q
}