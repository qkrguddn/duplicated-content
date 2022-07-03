$(document).ready(() => {
    var finalFieldSet = new Set();
    var finalPaperSet = new Set();
    $(".publication").each((index, item) => {
        finalFieldSet.add($(item).attr("reseach-field"));
        finalPaperSet.add($(item).attr("paper-type"));
    });
    finalFieldSet.forEach((value) => {
        $("#researchList").append("<li><a target-field=" + value + " href=\"#\">" + value + "</a></li>");
    });
    finalPaperSet.forEach((value) => {
        $("#paperList").append("<li><a target-field=" + value + " href=\"#\">" + value + "</a></li>");
    });
    var research_list = $("#researchList>li>a")
    var paper_list = $("#paperList>li>a")
    //research field 클릭한 것 보이기
    var allPublication = $('td.publication');
    var All = "publication";
    research_list.click(function () {
        var paperSelect = $("#paperList .selected").attr('target-field');
        var paperSelect2 = $('.' + paperSelect);  // paper 클릭한 거 내용  
        var rField = $(this).attr('target-field')
        var rField2 = $('.' + rField);//researchField클릭한 것의 내용       
        var fieldPaperCommon = allPublication.filter(rField2).filter(paperSelect2);//중복된 것만 보이게  
        fieldPaperCommonExcept = allPublication.filter((index, element) => {
            return !($(element).hasClass(rField) && $(element).hasClass(paperSelect))
        }
        );
        research_list.each((index, item) => {
            if (this == item) {
                fieldPaperCommon.show();
                $(item).addClass('selected');
            }
            else {
                fieldPaperCommonExcept.hide();
                $(item).removeClass('selected');
            }
        })
    });
    paper_list.click(function () {
        var fieldSelect = $("#researchList .selected").attr('target-field');
        var fieldSelect2 = $('.' + fieldSelect); // feild 클릭한 거 내용  
        var pType = $(this).attr('target-field')
        var pType2 = $('.' + pType);//paperType클릭한 것의 내용
        var fieldPaperCommon2 = allPublication.filter(fieldSelect2).filter(pType2);//중복된 것만 보이게
        fieldPaperCommonExcept2 = allPublication.filter((index, element) => {
            return !($(element).hasClass(fieldSelect) && $(element).hasClass(pType))
        }
        );
        paper_list.each((index, item) => {
            if (this == item) {
                fieldPaperCommon2.show();
                $(item).addClass('selected');
            }
            else {
                fieldPaperCommonExcept2.hide();
                $(item).removeClass('selected');
            }
        })
    });
});