<?php

namespace App\Controller;

use App\Entity\Commande;
use App\Entity\Produit;
use App\Form\CommandeType;
use App\Form\ProduitType;
use App\Repository\CommandeRepository;
use App\Repository\ProduitRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\HttpFoundation\File\Exception\FileException;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;


class CommandeController extends AbstractController
{
    /**
     * @Route("/affichercommande",name="affichercommande")
     */
    public function Affiche(CommandeRepository $repository){
        $tablecommandes=$repository->findAll();
        return $this->render('commande/affichercommande.html.twig'
            ,['tablecommandes'=>$tablecommandes]);

    }
    /**
     * @Route("/ajoutercommande",name="ajoutercommande")
     */
    public function ajouterProduit(EntityManagerInterface $em,Request $request ,ProduitRepository $UserRepository){
        $commande= new Commande();
        $form= $this->createForm(CommandeType::class,$commande);
        $form->add('Ajouter',SubmitType::class);
        $form->handleRequest($request);

        if($form->isSubmitted() && $form->isValid()){
            $new=$form->getData();

            $em->persist($commande);
            $em->flush();


            return $this->redirectToRoute("affichercommande");
        }
        return $this->render("commande/ajoutercommande.html.twig",array("form"=>$form->createView()));

    }


    /**
     * @Route("/supprimercommande/{id}",name="supprimercommande")
     */
    public function delete($id,EntityManagerInterface $em ,CommandeRepository $repository){
        $commande=$repository->find($id);
        $em->remove($commande);
        $em->flush();

        return $this->redirectToRoute('affichercommande');
    }


    /**
     * @Route("/{id}/modifiercommande", name="modifiercommande", methods={"GET","POST"})
     */
    public function edit(Request $request, Commande $commande): Response
    {
        $form = $this->createForm(CommandeType::class, $commande);
        $form->add('Confirmer',SubmitType::class);

        $form->handleRequest($request);


        if ($form->isSubmitted() && $form->isValid()) {
            $this->getDoctrine()->getManager()->flush();


            return $this->redirectToRoute('affichercommande');
        }

        return $this->render('commande/modifiercommande.html.twig', [
            'commandemodif' => $commande,
            'form' => $form->createView(),
        ]);
    }


    /**
     * @Route("/ajoutercommandeuser/{id}",name="ajoutercommandeuser")
     */
    public function ajoutercommandeuser(EntityManagerInterface $em,Request $request ,ProduitRepository $UserRepository,$id){
        $commande= new Commande();
        $form= $this->createForm(CommandeType::class,$commande);
        $form->add('Ajouter',SubmitType::class);
        $form->handleRequest($request);
        $produit = $UserRepository->findOneBy(["id" => $request->get("id")]);
        $commande->setProduit($produit);
        if($form->isSubmitted() && $form->isValid()){
            /**/$result=$this->getDoctrine()->getRepository(Produit::class)->find($id);
            $commande->setProduit($result);
            $new=$form->getData();

            $em->persist($commande);
            $em->flush();


            return $this->redirectToRoute("afficherproduitClient");
        }
        return $this->render("commande/ajoutercommandeuser.html.twig",array("form"=>$form->createView()));

    }




}
