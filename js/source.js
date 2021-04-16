let titleCase = function(str)
{
    return str.replace(
        /\w\S*/g,
        function(txt) {
          return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        }
      );
}
titleCase("Hoje está um lindo dia");

writeOutput(titleCase("Hoje está um lindo dia"));