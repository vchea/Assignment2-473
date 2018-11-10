/*
Vimean Chea
CPSC 473
*/


var model = {
  "students": [{
      "firstName": "Jonh",
      "lastName": "Lee",
      "grade": [{
          "course": "CPSC 315",
          "GPA": "B"
        },
        {
          "course": "CPSC 440",
          "GPA": "A"
        },
        {
          "course": "CPSC 456",
          "GPA": "C"
        },
        {
          "course": "CPSC 462",
          "GPA": "A"
        }
      ]
    },
    {
      "firstName": "Mike",
      "lastName": "Lee",
      "grade": [{
          "course": "CPSC 315",
          "GPA": "C"
        },
        {
          "course": "CPSC 440",
          "GPA": "A"
        },
        {
          "course": "CPSC 456",
          "GPA": "A"
        },
        {
          "course": "CPSC 462",
          "GPA": "A"
        }
      ]
    },
    {
      "firstName": "Wesley",
      "lastName": "Lee",
      "grade": [{
          "course": "CPSC 315",
          "GPA": "A"
        },
        {
          "course": "CPSC 440",
          "GPA": "A"
        },
        {
          "course": "CPSC 456",
          "GPA": "A"
        },
        {
          "course": "CPSC 462",
          "GPA": "B"
        }
      ]
    },
    {
      "firstName": "Brian",
      "lastName": "Lee",
      "grade": [{
          "course": "CPSC 315",
          "GPA": "C"
        },
        {
          "course": "CPSC 440",
          "GPA": "A"
        },
        {
          "course": "CPSC 456",
          "GPA": "C"
        },
        {
          "course": "CPSC 462",
          "GPA": "B"
        }
      ]
    }
  ]
}

var controller = {
  init: function() {
    studentView.init(controller);
  },
  getStudentByLastName(lN) {
    var returnlist = [];
    for (var i of model.students) {
      if (i.lastName == lN) {
        returnlist.push(i);
      }
    }
    return returnlist;
  },
  getStudentGrade(fN, lN) {
    for (var i of model.students) {
      if (i.lastName == lN && i.firstName == fN) {
        return i.grade;

      }
    }

  }

};

var studentView = {
  init: function(student) {
    this.render();
    this.studentGrade(fN, lN);

  },
  render: function() {

    var searchLastName = document.getElementById("LastName").value;
    var searchStudents = controller.getStudentByLastName(searchLastName);

    var x = "<ul><h1>Student Found: </h1>";
    for (var i of searchStudents) {
      x += "<li class=\"clickOn\">" + i.firstName + " " + i.lastName + "</li>";
    }
    x += "</ul>"
    document.getElementById("StudentFound").innerHTML = x;

    var StudentFirstName = document.getElementsByClassName("clickOn");
    var z = "<tr> <th> Course </th> <th> GPA </th> </tr>";
    for (var i = 0; i < StudentFirstName.length; i++) {
      StudentFirstName[i].addEventListener('click', function() {
        var searchStudents = controller.getStudentGrade("Jonh", "Lee");
        for (i of searchStudents) {
          z += "<tr> <td> " + i.course + "</td> <td>" + i.GPA + "</td> <tr>";
        }
        z += "</tr>"
        document.getElementById("myTable").innerHTML = z;
      })
    };

  },

}


controller.init();
