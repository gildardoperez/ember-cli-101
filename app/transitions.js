export default function(){  
  this.transition(
    this.fromRoute('tut1'),
    this.toRoute('tut2'),
    this.use('toRight'),
    this.reverse('toLeft')
  );
    this.transition(
    this.fromRoute('index'),
    this.toRoute('friends'),
    this.use('toRight'),
    this.reverse('toLeft')
  );
}