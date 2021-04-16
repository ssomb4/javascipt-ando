let truncateString = function(str, num)
{
    if (str.length > num) {
        return str.slice(0, num) + "...";
      } else {
        return str;
      } 
}

writeOutput(truncateString("Hoje está um lindo dia", 8));

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