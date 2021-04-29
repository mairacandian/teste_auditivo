PennController.ResetPrefix(null);
PennController.Debugoff();

Sequence("Participante", "Instrucoes", randomize("Experimento"), SendResults(), "Final");

Header(

  defaultText
    .css("font-size", "1.2em")
    .print()
  ,
  
  defaultTextInput
    .css("font-size", "1.2em")
    .print()
  ,
  
  defaultTextButton
    .css("font-size", "1.2em")
    .print()
    .center()
    .wait()
 
)

newTrial("Participante",

      newText("<p>Bem-Vindos!</p>")
      ,
      newText("<p>Neste experimento, você vai ouvir uma frase e depois deve escolher a melhor opção de interpretação para ela.</p>")
      ,
         
      newText("<p>Por favor, escreva seu NOME COMPLETO na caixa abaixo</p>")
      ,
      newTextInput("Nome")
      ,
      
      newText("<p>Agora selecione sua escolaridade na caixa abaixo e aperte o botão 'Iniciar' para começar</p>")
      ,
      newDropDown("Escolaridade", "Selecione sua escolaridade")
         .add("Médio Completo", "Superior em curso", "Superior Completo", "Pós-Graduação")
         .css("font-size", "1.2em")
         .print()
         .log()
      ,
         
      newButton("Iniciar")
      ,
         
      newVar("NOME")
        .global()
        .set( getTextInput("Nome") )
         
) 

.log( "Nome" , getVar("NOME") )

newTrial("Instruções",
         
         newText("<p>INSTRUÇÕES</p>")
         ,
         newText("<p>Ouça a frase com atenção e depois clique em cima de uma das sentenças <strong>A</strong> ou <strong>B</strong></p>")
         ,
         
         newButton("Iniciar")
         .log()
         
)

Template("tabela_script_auditivo.csv", 

         row => newTrial("Experimento",
                         
                        newAudio("AudioExperinmento", row.AudioExperimento)
                          .play()
                         ,
                         
                         newImage("alto_falante_icone.png")
                            .size( 90 , 90 )
                            .print()
                         ,
                         
                         newButton("Próximo")
                            .log()
                            .remove()
                         ,
                         
                         newText("A", row.SentencaA)
                         ,
                         newText("B", row.SentencaB)
                         ,
                  
                         newCanvas( "2000vm", "800vh" )
                            .add( "center at 25%" , "middle at 2%" , getText("A") )
                            .add( "center at 75%" , "middle at 2%" , getText("B") )
                            .print()
                         ,
                       
                         newSelector()
                            .add( getText("A") , getText("B") )
                            .keys("A", "B")
                            .log()
                            .wati()
              
                        )
         
          .log("Group", row.Group)
          .log("item", row.Item)

)         
         
newTrial("Final",
         
         newText("<p>O experiemento foi concluído. Obrigada pela participação!</p>")
         .center()
         ,
         newText("<p>Você receberá um e-mail com a sua declaração de participação.</p>")
         .center()
         .wait()
         
         
)


.setOption("countsForProgressBar", false);
         
         
         
         
        
