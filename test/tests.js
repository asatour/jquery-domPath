var Qunit_lifeCycle, all_possible_options, map_tests, map_test_expected_result, defaultOptions;

/**
 * Defining test lifecycle
 * @type {{setup: Function, teardown: Function}}
 */
Qunit_lifeCycle = {

    // appending html snippet code where test will be executed
    setup: function () {
        var html_test = '<div class="module" id="products-block"> <div class="description"> ' +
            '<h1 class="section-title"> product general description </h1> <ul class="products"> <li>' +
            'Cameras</li><li>TV</li><li>Computers</li></ul> </div></div>';
        $('body').append(html_test);
    },

    // remove the snippet code
    teardown: function () {
        $('body').find('#products-block').remove();
    }
};

module('all_possible_cases', Qunit_lifeCycle);

/**
 * Init mock test configuration
 */
(function (){

   defaultOptions = {
         tag             :   true,   // get dom tag
         lowerCase       :   true,   // get tag in lower or upper case
         class           :   true,   // get element class
         id              :   true,   // get element id
         body            :   false,  // show body in dom full path
         idBeforeClass   :   true,   // display id before class
         oneResult       :   false,  // get only the first result(as string)
         scaleType       :   false   // if the result contains only one element get it as string and not array
     };

   all_possible_options = {
        1       :   {tag            :   true   },
        2       :   {lowerCase      :   true   },
        3       :   {id             :   true   },
        4       :   {class          :   true   },
        5       :   {body           :   true   },
        6       :   {idBeforeClass  :   true   },
        7       :   {oneResult      :   true   },
        8       :   {scaleType      :   true   },

       '-1'     :   {tag            :   false   },
       '-2'     :   {lowerCase      :   false   },
       '-3'     :   {id             :   false   },
       '-4'     :   {class          :   false   },
       '-5'     :   {body           :   false   },
       '-6'     :   {idBeforeClass  :   false   },
       '-7'     :   {oneResult      :   false   },
       '-8'     :   {scaleType      :   false   }
   };

   map_tests = {
        'with class, id and tag'                    :   [1, 4, 3],      //tag, class, id
        'with class and tag but without id'         :   [1, 4, -3],     //tag, class,!id
        'with tag, without neither class nor id'    :   [1, -4, -3],    //tag,!class,!id
        'with tag and id, without class'            :   [1, -4, 3],     //tag, !class, id
        'without tag, with id and class'            :   [-1, 4, 3],     //!tag, class, id
        'without tag, without class, with id'       :   [-1, -4, 3],     //!tag, !class, id
        'without tag,id and class'                  :   [-1, -4, -3],     //!tag, !class, !id
        'without tag and id, with class'            :   [-1, 4, -3],     //!tag, class, !id
        'with body'                                 :   [5],//body
        'without body'                              :   [-5],//!body
        'id before class'                           :   [6],
        'class before id'                           :   [-6],
        'one result'                                :   [7],
        'multi result'                              :   [-7],
        'scaling type'                              :   [8],
        'do not scaling type'                        :   [-8]
    };

   map_test_expected_result = {
        'with class, id and tag'                    :   ['div#products-block.module > div.description > ul.products'],
        'with class and tag but without id'         :   ['div.module > div.description > ul.products'],
        'with tag, without neither class nor id'    :   ['div > div > ul'],
        'with tag and id, without class'            :   ['div#products-block > div > ul'],
        'without tag, with id and class'            :   ['#products-block.module > .description > .products'],
        'without tag, without class, with id'       :   [''],
        'without tag,id and class'                  :   [''],
        'without tag and id, with class'            :   ['.module > .description > .products'],
        'with body'                                 :   ['body > div#products-block.module > div.description > ul.products'],
        'without body'                              :   ['div#products-block.module > div.description > ul.products'],
        'id before class'                           :   ['div#products-block.module > div.description > ul.products'],
        'class before id'                           :   ['div.module#products-block > div.description > ul.products'],
        'one result'                                :   'div#products-block.module > div.description > ul.products',
        'multi result'                              :   ['div#products-block.module > div.description > ul.products'],
        'scaling type'                              :   'div#products-block.module > div.description > ul.products',
        'do not scaling type'                        :   ['div#products-block.module > div.description > ul.products']
   };

})();

/**
 * Run test depending on options entry and compare expected result
 * @param test_name
 * @param test_map
 */
function mockTest (test_name, test_map){
    var item, options, optionItem, products_domPath;
    options = {};

    for(item = 0; item < test_map.length; item ++){
        optionItem = all_possible_options[test_map[item]];
        if(typeof optionItem === 'object'){
            options = $.extend(options, optionItem);
        }
    }

    products_domPath = $('.products').domPath(options);
    strictEqual(map_test_expected_result[test_name].toString(), products_domPath.toString(), 'Passed!');
}

/**
 * run all tests
 */
$.each(map_tests, function(test_name, test_map){
    test(test_name, function () {
        expect(1);
        mockTest(test_name, test_map);
    });
});